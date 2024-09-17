CREATE TABLE FORMULARIO (
    id SERIAL PRIMARY KEY,               -- Campo para identificar de forma única cada registro
    nombres VARCHAR(255) NOT NULL,       -- Campo de texto para nombres
    apellidos VARCHAR(255) NOT NULL,     -- Campo de texto para apellidos
    email VARCHAR(255) NOT NULL UNIQUE,  -- Campo de texto para correo electrónico, debe ser único
    password VARCHAR(255) NOT NULL,      -- Campo de texto para contraseña
    pais VARCHAR(255) NOT NULL,          -- Campo de texto para país
    genero VARCHAR(50) NOT NULL,          -- Campo de texto para género
    terminos BOOLEAN NOT NULL            -- Campo booleano para términos aceptados
);
