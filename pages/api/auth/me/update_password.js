import nc from "next-connect";
// import dbConnect from "../../../backend/config/dbConnect";
import dbConnect from "../../../../backend/config/dbConnect";
// import { registerUser } from "@/backend/controllers/authControllers";
import { updatePassword } from "../../../../backend/controllers/auth";
import onError from "../../../../backend/middlewares/errors"
// import upload from "../../../../backend/utils/multer";
import { isAuthenticatedUser } from "../../../../backend/middlewares/auth";
//  immport onError from ""

const handler = nc({onError});

dbConnect();
  
  handler.use(isAuthenticatedUser).put(updatePassword);
export default handler;