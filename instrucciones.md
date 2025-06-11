# 🛡️ Sistema de Autenticación con React + Flask por Erik Ruiz


---

## 📁 Estructura del Proyecto

```
auth_app/
├── backend/        # Backend con Flask
│   └── app.py
└── frontend/       # Frontend con React + Vite
    ├── .env
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── Signup.jsx
    │   │   ├── Login.jsx
    │   │   └── Private.jsx
    │   └── components/
    │       └── Navbar.jsx
```

---

## 🐍 Backend - Flask

### 🔧 Requisitos
- Python 3.8+
- pip

### 🚀 Instalación y ejecución
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install flask flask-cors flask-jwt-extended flask-sqlalchemy werkzeug
python app.py
```

El backend estará corriendo en: `http://127.0.0.1:5000`

---

## ⚛️ Frontend - React

### 🔧 Requisitos
- Node.js y npm

### 🚀 Instalación y ejecución
```bash
cd frontend
npm create vite@latest .   # Selecciona React + JavaScript
npm install
npm install react-router-dom
```

### 🌍 Archivo `.env`
Crea un archivo `.env` en la raíz del frontend:
```
VITE_BACKEND_URL=http://127.0.0.1:5000
```

### ▶️ Ejecutar el frontend
```bash
npm run dev
```

---

## 🔐 Funcionalidad

### Registro
- Ruta: `/signup`
- Crea un nuevo usuario en la base de datos.

### Inicio de Sesión
- Ruta: `/login`
- Genera un token y lo guarda en `sessionStorage`.

### Página Privada
- Ruta: `/private`
- Valida que haya token y que sea válido. Si no, redirige a `/login`.

### Cierre de Sesión
- Elimina el token y redirige a `/login`.

---

## ✨ Autor

Erik Ruiz