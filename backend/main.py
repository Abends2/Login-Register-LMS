from flask import Flask, request
#from flask_sqlalchemy import SQLAlchemy

main_app = Flask(__name__)
#database = SQLAlchemy(main_app)


if __name__ == "__main__":
	main_app.run()