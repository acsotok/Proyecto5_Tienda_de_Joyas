const pool = require('../config/db')

const joyasServices = require('../services/joyasServices');


const joyasControllers = {

    obtenerJoyas: async (req, res) => {
        try{
            const queryString = req.query;
            const joyas = await joyasServices.obtenerJoyas(queryString);
            const HATEOAS = await joyasServices.HATEOAS(joyas)
            res.status(200).json(HATEOAS);
        }
        catch(error) {
            res.status(500).send('Ha ocurrido un problema, intentelo más tarde')
        }
        
      },
    
    
      obtenerJoyaById: async (req, res) => {
        try {
          const { id } = req.params;
          const joya = await joyasServices.obtenerJoyaById(id)
          res.status(200).json(joya)
        } catch (error) {
          res.status(500).send('Ha ocurrido un problema, intentelo más tarde');
        }
      },
    
      obtenerJoyasPorFiltro:  async (req, res) => {
        try{
          const queryStrings = req.query
          const joyas = await joyasServices.obtenerJoyasPorFiltro(queryStrings)
          res.json(joyas)
        } catch (e) {
          res.status(500).send(e.message);
        }
       
      },
      getDefautl : (req, res) => {
        res.status(404).send("Esta ruta no existe")
      }
}

module.exports = joyasControllers


