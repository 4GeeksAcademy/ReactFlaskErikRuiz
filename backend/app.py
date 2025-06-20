from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
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

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"msg": "Campos requeridos"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Usuario ya existe"}), 400

    hashed = generate_password_hash(password)
    user = User(email=email, password=hashed)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Usuario creado"}), 200

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"msg": "Credenciales inválidas"}), 401

    token = create_access_token(identity=user.id)
    return jsonify(token=token), 200

@app.route('/api/private', methods=['GET'])
@jwt_required()
def private():
    uid = get_jwt_identity()
    return jsonify({"msg": "Acceso concedido", "user_id": uid}), 200

if __name__ == '__main__':
    app.run(debug=True)