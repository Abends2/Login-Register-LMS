import psycopg2
from loguru import logger
from datetime import datetime
import surround
import hashlib

import pandas as pd


def create_database_tables_startup():
	cursor = get_bd_frame().cursor()
	cursor.execute('''CREATE TABLE IF NOT EXISTS UserLogin (
							id SERIAL PRIMARY KEY NOT NULL,
							username varchar(32) NOT NULL,
							password varchar(45) NOT NULL,
							email    varchar(45),
							phone    varchar(45)
	)''')
	
	
	cursor.execute('''CREATE TABLE IF NOT EXISTS UserData (
							id SERIAL PRIMARY KEY NOT NULL,
							FirstName varchar(45) NOT NULL,
							LastName varchar(45) NOT NULL,
							MiddleName varchar(45),
							class varchar(45)
	)''')

	cursor.execute('''CREATE TABLE IF NOT EXISTS Session (
							id SERIAL PRIMARY KEY NOT NULL,
							AccessToken char(48),
							RefreshToken char(48),
							Type varchar(32),
							Users_Id char(19),
							StartTime TIMESTAMP
	)''')
	
	lg.info('Database created successfully')

def init_db_logs():
	global lg
	date_time = datetime.now().strftime("%d_%m_%Y %H-%M-%S__")
	logger_format = ('{time:DD-MM-YYYY_HH:mm:ss} {message}')
	logger.add(f"logs/{date_time}_menu.log", level="INFO", format=logger_format, filter=surround.make_filter("base"))
	lg = logger.bind(name="base")
	return lg


#--------------------------------------------------------------------
def get_bd_frame():
	conn = psycopg2.connect(database="postgres", user='postgres', password='asdasd123123', host='127.0.0.1', port= '5433')
	conn.autocommit = True
	return conn



def check_for_same_username(username_input, conn):
	cursor = conn.cursor()
	cursor.execute(f'SELECT COUNT(*) FROM UserLogin WHERE username = \'{username_input}\' ')
	counter = cursor.fetchone()[0]
	if counter == 0:
		return True
	else:
		return False

def check_for_same_email(email_input, conn):
	cursor = conn.cursor()
	cursor.execute(f'SELECT COUNT(*) FROM UserLogin WHERE email = \'{email_input}\' ')
	counter = cursor.fetchone()[0]
	if counter == 0:
		return True
	else:
		return False

def make_user_db(username, password, name, surname, mail, phone, conn):
	cursor = conn.cursor()
	print(username, password, mail, phone)
	cursor.execute(f"INSERT INTO UserLogin(username, password, email, phone) VALUES(%s, %s, %s, %s)", (username, password, mail, phone))
	cursor.execute(f"INSERT INTO UserData(FirstName, LastName) VALUES (%s, %s)", (name, surname))
	conn.commit()
	return True


def encrypt_pass(passwd):
	for i in range(5):
		passwd = hashlib.md5(passwd.encode("utf-8")).hexdigest()
	return passwd


def check_for_login(username, password, conn):
	cursor = conn.cursor()
	password = encrypt_pass(password)
	lg.info(f'User {username} is doing Login')
	cursor.execute(f"SELECT COUNT(username) FROM UserLogin WHERE username=\'{username}\'")
	ifNameExists = cursor.fetchone()[0]

	cursor.execute(f"SELECT COUNT(username) FROM UserLogin WHERE username=\'{username}\' and password=\'{password}\'")
	counter = cursor.fetchone()[0]

	if ifNameExists == 0:
		lg.info(f'username {username} - no such user in db')
		return 3 #No such user
	else:
		if counter == 0:
			lg.info(f'username {username} is correct but password is not')
			return 2 #login is correct but password is not
		else:
			lg.info(f'username {username} and password are correct,authing user')
			return 1 #login and password are correct,authing user


#--------------------------------------------------------------------
def make_register(username, password, name, surname, mail, phone):
	conn = get_bd_frame()
	if check_for_same_username(username, conn):
		if check_for_same_email(mail, conn):
			password = encrypt_pass(password)
			make_user_db(username, password, name, surname, mail, phone, conn)
			conn.close()
			return True, 'amongus'

		else:
			conn.close()
			lg.info('Users mail_not_available')
			return False, 'mail_not_available'
	else:
		conn.close()
		lg.info('Users login_not_available')
		return False, 'login_not_available'


def make_login(username, password):
	conn = get_bd_frame()
	if check_for_same_username(username, conn) == False:
		req = check_for_login(username, password, conn)
		if req == 1:
			conn.close()
			return True, 'login_granted'
		elif req == 2:
			conn.close()
			return False, 'login_or_password_is_not_correct'
	else:
		conn.close()
		return False, 'no_such_user'


"""
REGISTER output codes 200:
login_not_available - Такой логин уже существует
mail_not_available  - Такая почта уже существует

login_granted       - Логин корректен пользователь авторизирован
login_or_password_is_not_correct - Логин или пароль не верен
no_such_user        - Такого польщователя в бд не существует
"""