const {StatusCodes} = require('http-status-codes');

const {AirplaneService} = require('../services');

const {ErrorResponse,SuccessResponse} = require('../utils/common')



async function createAirplane(req,res){



    try {  
        
        console.log("inside Controller");   
        const airplane = await AirplaneService.createAirplane ({
              modelNumber : req.body.modelNumber,
              Capacity : req.body.Capacity,

        });
         
        SuccessResponse.data =airplane
        return res.status(StatusCodes.CREATED)
                  .json( SuccessResponse );
        
    } catch (error) {
   
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
        
    }
      
}

module.exports = {
    createAirplane
}