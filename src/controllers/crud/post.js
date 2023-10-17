//const students = require("../../utils/studentsDatabase");
//import students from "../../utils/studentsDatabase";
import {User} from "../../models"
//const addnew = require("./put");
export const  addnew = async(req, res) =>{
    let user = req.body;
    // let isValid = ValiditeStudent(student);
    // if(isValid =""){
      let newUser =   await User.create(user);
        
        console.log(newUser);
        res.status(201).json(newUser);
//     }
//     else{
// res.statusMessage = isValid;
// res.sendStatus(404);
//     }
};
//export default addnew;
//module.exports =addnew;