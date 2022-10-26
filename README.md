<h1 align="center">Login-Register-LMS</h1>


<h3 align="center">Task descripton</h3>

<p align="justify">Метод /api/register: На вход принимает username, password, mail, phone, name, surname. Поля mail и phone опциональны. Производится проверка данных - если пользователь с таким mail уже существует - возвращать ошибку 200 "mail_not_available". После успешной регистрации создаются ресурсы UsersLogin, userData. В ресурс UsersLogin записываются username, password, mail. В ресурс userData записывается FirstName, LastName.</p>
<p align="justify">Метод /api/login: На вход принимается username, password, grant_type (для авторизации по паролю стоит password). В результате успешной авторизации пользователю будут отправляться два токена: access_token – токен авторизации, используемый для входа и refresh_token – используемый для обновления токена авторизации. Оба токена записываются в локальное хранилище и хранятся там.
</p>

<h3 align="center">Additional functionality</h3>
<ul>
  <li>Особенность 1</li>
  <li>Особенность 2</li>
  <li>Особенность 3</li>
</ul>

<h3 align="center">Tools</h3>
<p>Для работы проекта необходимо:</p>
<ul>
  <li>Node.js (v16.18.0)</li>
  <li>PostgreSQL (v15.0)</li>
  <li>Python 3 (v3.10.8)</li>
</ul>

<h3 align="center">How to start the project</h3>

<img src="diagramm.png" alt=""/>

#------------Creating-Frontend------------
1) pip install pipenv

2) pipenv shell
(Virtualenv location: C:\Users\Abends\.virtualenvs\Login-Register-LMS-lo8P3mGi)

3)C:\Users\Abends\.virtualenvs\Login-Register-LMS-lo8P3mGi\Scripts\activate

4) npx create-react-app frontend

5) cd frontend

6) To start App: npm start

#------------Creating-Backend-----------

1) (venv)> pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors



npm install boxicons --save
npm install react-router-dom
