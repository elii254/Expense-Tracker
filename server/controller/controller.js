//const { model } = require('mongoose')
const model = require('../models/model');
//create categories


//post http://localhost:8080/api/categories
async function create_Categories(req, res){

    // const Create = new model.Categories({
    //     type: "Savings",
    //     color: "1F3B5C", //DARK

    // })

    const Create = new model.Categories({
        type: "Investment",
        color: "#FCBE44"
    })

    await Create.save(function(err){
        if(!err)return res.json(Create);
        return Response.status(400).json({message: `Error while creating categories ${err}`})
    })


}

//get http://localhost:8080/api/categories

async function get_categories(req, res){

    let data = await model.Categories.find({})


    let filter = await data.map(v => Object.assign ({}, {type: v.type, color: v.color}));



    return res.json(filter)
     
}


//post http://localhost:8080/api/transactions
async function create_Transaction(req, res) {

    if(!req.body)return res.status(400).json("HTTP Data not available")
    let { name, type, amount } = req.body;


    const create = await new model.Transaction(
        {
            name,
            type,
            amount,
            date: new Date()
        }
    
    );

    create.save(function (err) {
        if (!err) return res.json(create);

        return res.status(400).json({ message: `Error while creating the transaction ${err}`})
        
    })
}

//get http://localhost:8080/api/transactions
async function get_Transaction(req, res) {

    let data = await model.Transaction.find({});
    return res.json(data);

}




module.exports = {
    create_Categories, 
    get_categories,
    create_Transaction,
    get_Transaction

}