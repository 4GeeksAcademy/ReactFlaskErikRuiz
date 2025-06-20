# 📦 Instrucciones para Proyecto React + Flask en Codespaces

Este proyecto implementa un sistema de autenticación completo utilizando:

- React (Vite) para el frontend
- Flask para el backend
- JWT para autenticación
- SQLite como base de datos local
- GitHub Codespaces como entorno de desarrollo listo para usar

---

## ⚙️ Requisitos
- Repositorio en GitHub
- Codespaces habilitado en tu cuenta

---

## 🚀 ¿Cómo usarlo?

### 1. Sube el contenido del ZIP a un nuevo repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Crea un nuevo repositorio
3. Sube el contenido de `react_flask_auth_ready.zip` descomprimido

### 2. Abre Codespaces

1. En tu repositorio, haz clic en el botón verde **Code**
2. Selecciona **Codespaces** > **Create codespace on main**

Codespaces instalará automáticamente:

- Python 3.10
- Flask y dependencias (con `requirements.txt`)
- Node.js y dependencias del frontend (con `npm install`)

---

## 🧪 Ejecutar el proyecto

### Backend (Flask)

```bash
cd backend
python app.py
```

Disponible en: `http://localhost:5000`

### Frontend (React)

```bash
cd frontend
npm run dev
```

Disponible en: `http://localhost:5173`

---

## 🔐 Funcionalidades

- `/signup`: Registro de nuevos usuarios
- `/login`: Inicio de sesión con token JWT
- `/private`: Página privada protegida (requiere token)
- Navbar que cambia según si hay sesión activa o no

---

## 🧠 Extras

- `.env` ya configurado para backend y frontend
- `.devcontainer` para que Codespaces configure todo automáticamente
- Puedes usar SQLite sin configuraciones adicionales

---

## 🧑 Autor

Proyecto base creado para **Erik Ruiz - Full Stack Developer**