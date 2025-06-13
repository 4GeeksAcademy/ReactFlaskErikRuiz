---

## 🧪 Endpoints

### POST `/user`
Registrar un nuevo usuario  
**Body JSON**:
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

### POST `/token`
Iniciar sesión y obtener token  
**Body JSON**:
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

### GET `/private`
Ruta protegida (requiere token en header `Authorization: Bearer <token>`)

---

## 🧠 Funcionalidad

- Formulario de registro (`/signup`)
- Formulario de login (`/login`)
- Página privada (`/private`) solo visible si tienes un token válido
- Botón de logout en el Navbar
- Condicionales para mostrar "Login / Registrarse" o "Cerrar sesión"

---

## 📄 Notas

- Modifica el secreto `JWT_SECRET_KEY` en producción.
- Cambia la base de datos SQLite por PostgreSQL si usas deploy.

---

## 🧑 Autor

**Erik Ruiz - Full Stack Developer**