//const students = require("../../utils/studentsDatabase.js");
//import { get } from "../../routes/students";
//import students from "../../utils/studentsDatabase";
import { User} from "../../models";

export const  getAll = async(req, res) =>{
    const newUser = await  User.find({});
     res.status(200).json(newUser);
}
//module.exports = getAll;
//export default getAll;



// Get All Users
// userController.findAll = async (req, res) => {
//     try {
//       let users = await userModel.find();
//       return res.json(users);
//     } catch (error) {
//       return res
//         .status(httpStatus.INTERNAL_SERVER_ERROR)
//         .json({ error: error.toString() });
//     }
//   };