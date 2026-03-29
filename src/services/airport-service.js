const { AirportRepository } = require("../repository");
const CrudService = require("./crud-service");

class AirportService extends CrudService{
    constructor(){
        const airportRepossitory = new AirportRepository();
        super(airportRepossitory);
    }
}

module.exports = AirportService;