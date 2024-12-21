**Pasos para Configurar y Ejecutar el Proyecto**

**Instalar las Dependencias**: Ejecutar `npm install express pg pg-format dotenv` para crear la carpeta `node_modules`y las dependencias necesarias

**Configurar el Archivo `.env`**: Copiar el archivo `.envexample` a `.env` y configurar tus variables de entorno.

**Abrir el archivo `.env` y configurar las siguientes variables con tus datos**:

    .env
    PG_USER=your_postgres_user
    PG_HOST=localhost
    PG_DATABASE=your_database_name
    PG_PASSWORD=your_postgres_password
    PG_PORT=5432
    PORT=3000
**Crear las Tablas en PostgreSQL**: Conectarse a su base de datos PostgreSQL y ejecutar las consultas SQL proporcionadas para crear las tablas necesarias.

**Iniciar el Proyecto**: Ejecutar `node index.js` para correr el servidor.
