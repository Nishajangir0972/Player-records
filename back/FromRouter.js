import express  from "express";
import FormModel from "./FormModel.js";

const FormRouter = express.Router();

FormRouter.get("/" ,async(req,res)=>{
    const result = await FormModel.find()
res.json(result)
} )

FormRouter.post("/add" , async(req,res)=>{
    const formToAdd = new FormModel(req.body)
    let result = await formToAdd.save()
    res.json(result)
})

FormRouter.get('/search/:id' , async(req, res) =>{
    const itemId = req.params.id
    const item =   await FormModel.findOne({aadhar: itemId})

    if(!item){
        return res.status(404).json({error: "Person not found"})  
      }
      res.json(item)
})

export default FormRouter