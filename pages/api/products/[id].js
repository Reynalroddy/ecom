import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import { getProduct } from "../../../backend/controllers/product";
import onError from "../../../backend/middlewares/errors"
import { isAuthenticatedUser } from "../../../backend/middlewares/auth";
const handler = nc({onError});

dbConnect();

handler.use(isAuthenticatedUser).get(getProduct);

export default handler;