import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
// import { registerUser } from "@/backend/controllers/authControllers";
import { registerUser } from "../../../backend/controllers/auth";
import onError from "../../../backend/middlewares/errors"
//  immport onError from ""

const handler = nc({onError});

dbConnect();

handler.post(registerUser);

export default handler;