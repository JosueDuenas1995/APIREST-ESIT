// models/usuario.js
module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id_usuarios: { 
            type: type.INTEGER, 
            autoIncrement: true, 
            primaryKey: true 
        },
        nombre: { 
            type: type.STRING(45), 
            allowNull: false 
        }, 
        email: { 
            type: type.STRING(45), 
            unique: true, 
            allowNull: false 
        }, 
        contraseña: { 
            type: type.STRING(20), 
            allowNull: false 
        }, 
        telefono: { 
            type: type.STRING(15), 
            allowNull: true 
        }, 
        direccion: { 
            type: type.STRING(255), 
            allowNull: true 
        }, 
        tipo_usuario: { 
            type: type.ENUM('cliente', 'admin'), 
            allowNull: false 
        }
    }, {
        timestamps: false  // Esto desactiva las columnas `createdAt` y `updatedAt`
    });
};
