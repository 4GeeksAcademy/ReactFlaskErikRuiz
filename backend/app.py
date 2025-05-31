from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['JWT_SECRET_KEY'] = 'super-secret-key'

db = SQLAlchemy(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/user', methods=['POST'])
def create_user():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "User already exists"}), 400

    hashed_password = generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created"}), 200

@app.route('/token', methods=['POST'])
def login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"msg": "Bad credentials"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token}), 200

@app.route('/private', methods=['GET'])
@jwt_required()
def private():
    user_id = get_jwt_identity()
    return jsonify({"msg": "Acceso autorizado", "user_id": user_id}), 200

if __name__ == '__main__':
    app.run(debug=True)