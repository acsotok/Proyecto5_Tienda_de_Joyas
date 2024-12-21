const express = require("express")
const app = express()
const pool = require("./src/config/db")
require ('dotenv').config()

//Importar rutas
const joyasRoutes = require('./src/routes/joyasRoutes')

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    const parametros = req.params;
    const url = req.url;
    console.log(`
        Hoy ${new Date()}
        Se ha recibido una consulta en la ruta ${url}
        con los parámetros: `, parametros)
    return next();
});

// Conexión a la base de datos
pool.connect().then(() => {
    console.log('Conexión a la base de datos exitosa');
  })

// Rutas
app.use('/', joyasRoutes)

// Configuración del puerto
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})