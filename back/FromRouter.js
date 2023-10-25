import express  from "express";
import FormModel from "./FormModel.js";

const FormRouter = express.Router();

// FormRouter.get("/" ,async(req,res)=>{
//     const result = await FormModel.find()
// res.json(result)
// } )

FormRouter.post("/add" , async(req,res)=>{
    const formToAdd = new FormModel(req.body)
    let result = await FormModel.find()
    if(result.length == 0){
        formToAdd.srno += `001`
    console.log(result)

    }
    else{
        let lastpart = ++result[result.length - 1].srno.split("/")[3];
        lastpart = String(lastpart).padStart(3,"0")
        formToAdd.srno += `${lastpart}`

    }

    let records = await formToAdd.save()
    res.json(records)
})

FormRouter.get('/search/:id' , async(req, res) =>{
    const itemId = req.params.id
    const item =   await FormModel.findOne({aadhar: itemId})

    // if(!item){
    //     return res.status(404).json({error: "Person not found"})  
    //   }
      res.json(item)
})

export default FormRouter