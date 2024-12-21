const pool = require('../config/db');
const joyasQueries = require('../queries/joyasQueries')
const format = require('pg-format')

const joyasServices = {
    HATEOAS : (joyas) => {
        try{
            const results = joyas.map((j) => {
            return {
                name: j.nombre,
                href: `/joyas/joya/${j.id}`,
                //category: j.categoria,
                //metal: j.metal,
                //price: j.precio,
                //stock: j.stock
            }
            }).slice(0, 6)
         
            const totalJoyas = joyas.length
            const stockTotal = joyas.reduce(
                (totalJoyas, producto) => totalJoyas + producto.stock,
                0
            );
         
            const getHATEOAS = {
                totalJoyas,
                stockTotal,
                results
            }
            return getHATEOAS
        }catch (error) {
            res.status(500).json({ error: "Error realizar HATEOAS." })
        }
    },
        
    obtenerJoyas : async({ limits = 10, order_by="id_ASC", page=1 }) =>{
        try{
            const offset = Math.abs((page-1)*limits)
            const [campo, direccion] = order_by.split("_")
            const consultaFormateada = format(joyasQueries.obtenerJoyas, campo, direccion, limits, offset)
            const {rows: joyas} = await pool.query(consultaFormateada)
            return joyas
        }catch(error){
            console.log('Error al obtener joyas:', error);
            throw error;
        }
    
    },

    obtenerJoyaById : async (id) => {
        const value = [id];
        const { rows: joya } = await pool.query(joyasQueries.obtenerJoyaById, value);
        return joya;
      },
    
    obtenerJoyasPorFiltro : async({precio_max,precio_min,categoria,metal})=>{
        try{
            let filtros = []
            if(precio_max) filtros.push(`precio <= ${precio_max}`)
            if(precio_min) filtros.push(`precio > ${precio_min}`)
            if(categoria) filtros.push(`categoria = '${categoria}'`)
            if(metal) filtros.push(`metal = '${metal}'`)
            let consulta = joyasQueries.obtenerJoyasPorFiltro
            if(filtros.length > 0){
                filtros = filtros.join(" AND ")
                consulta += ` WHERE ${filtros}`
            }
            console.log(consulta)
            const { rows: joyas } = await pool.query(consulta)
            return joyas
        }catch(error){
            console.log('Error al obtener joyas por filtro:', error);
            throw error;
        }
    
    }
}


module.exports = joyasServices
