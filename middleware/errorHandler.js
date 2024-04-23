const constant =require("../controllers/constant")

const errorHandler=(err,req,res,next)=>{
  const statusCode = res.statusCode ?  res.statusCode :400;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({title:"validation error" ,message: err.message , stackTrace: err.stack })
        break;
  
        case constants.NOT_FOUND:
        res.json({title:"Not Found error" ,message: err.message , stackTrace: err.stack })
        break;
        
        case constants.UNAUTHORIZED_ERROR:
        res.json({title:"unauthorized error" ,message: err.message , stackTrace: err.stack })
        break;
        
        case constants.SERVER_ERROR:
        res.json({title:"server error" ,message: err.message , stackTrace: err.stack })
        break;
        
        case constants.FORBIDDEN_ERROR:
        res.json({title:"forbidden error" ,message: err.message , stackTrace: err.stack })
        break;
  
    default:

        break;
  }

  
};

module.exports= errorHandler;