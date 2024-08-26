const jwt = require('jsonwebtoken');

const user = { id: 1, username: 'user1' };

// Crear un token
const token = jwt.sign(user, 'secreto', { expiresIn: '1h' });

// Verificar el token
try {
    const decoded = jwt.verify(token, 'secreto');
    console.log(decoded); // Muestra el payload del token
} catch (err) {
    console.log('Token no válido');
}
