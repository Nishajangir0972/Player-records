import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    serial: String,
    player: String,
    aadhar: Number,
    game: String,
    age: String,
    position: String,
    state: String,
    tournament: String,
    organised: String,
    venue: String
});

const FormModel = mongoose.model("form", FormSchema);
export default FormModel