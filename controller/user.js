
let USER = require('../model/user')


exports.createData = async(req , res) => {

    console.log("=====>",req.body);
    try {
       const data = await USER.create(req.body)
            res.status(200).json({
                status : 'success',
                message : 'Data create Success',
                data : data
            }) 
    } catch (error) {
         res.status(400).json({
                status : 'fail',
                message : error.message
            })
    }
    

        
}

exports.getData = async(req , res) => {
     try {
       const data = await USER.find()
            res.status(200).json({
                status : 'success',
                message : 'Data Get Success',
                data : data
            }) 
    } catch (error) {
         res.status(400).json({
                status : 'fail',
                message : error.message
            })
    }
}