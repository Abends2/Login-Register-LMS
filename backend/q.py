from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, World!"


@app.route('/api/register', methods =['POST'])
def register():
    password = request.args.get('password')
    mail     = request.args.get('mail')
    phone    = request.args.get('phone')
    name     = request.args.get('name')
    surname  = request.args.get('surname')




    return f'''<h1>The values are: {password} {mail} {phone} {name} {surname}</h1>'''


if __name__ == '__main__':
    app.run(debug=True)