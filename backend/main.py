from flask import Flask, request
import database
import hashlib
from config import SALT
from flask_cors import CORS

from flask_cors import cross_origin

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'application/json'
app.config['CORS_ORIGINS'] = ['http://localhost:5000']
app.config['CORS_AUTOMATIC_OPTIONS'] = True

CORS(app)

@cross_origin(origin='*',headers=['Content-Type','Authorization'])
@app.route('/')
def index():
	return "Hello, World!"



@cross_origin(origin='*',headers=['Content-Type','Authorization'])
@app.route('/api/register', methods=['OPTIONS'])
def register():

	username = request.args.get('username')
	password = request.args.get('password')

	name     = request.args.get('name')
	surname  = request.args.get('surname')

	mail     = request.args.get('mail')
	phone    = request.args.get('phone')

	req = database.make_register(username, SALT+password, name, surname, mail, phone)
	print(req)

	if req[0]:
		return f'''<h1>The values are: {password} {name} {surname}</h1>'''
	else:
		return req[1]



@cross_origin(origin='*',headers=['Content-Type','Authorization'])
@app.route('/api/login', methods=['OPTIONS'])
def login():

	username = request.args.get('username')
	password = request.args.get('password')

	req = database.make_login(username, SALT+password)
	if req[0]:
		return req[1]
	else:
		return req[1]



if __name__ == '__main__':
	database.init_db_logs() 				  #Init logs for logging my nigga
	database.create_database_tables_startup() #Init db for carrying data my nigga
	app.run(debug=True, host='0.0.0.0', port='5000', ssl_context=('cert.pem', 'key.pem'))