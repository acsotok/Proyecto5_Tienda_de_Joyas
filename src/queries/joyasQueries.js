const joyasQueries = {
    obtenerJoyas: "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    obtenerJoyaById: "SELECT * FROM inventario WHERE id = $1;",
    obtenerJoyasPorFiltro: "SELECT * FROM inventario"
}

module.exports = joyasQueries