import nc from "next-connect";
// import dbConnect from "@backend/config/dbConnect";
import dbConnect from "../../../backend/config/dbConnect";
// import { newProduct } from "@backend/controllers/productControllers";
import { getProduct, getProducts, newProduct } from "../../../backend/controllers/product";
// import { isAuthenticatedUser } from "../../../backend/middlewares/auth";
import onError from "../../../backend/middlewares/errors"
import { isAuthenticatedUser } from "../../../backend/middlewares/auth";
//  immport onError from ""

const handler = nc({onError});

 dbConnect();

handler.post(newProduct);
handler.get(getProducts);
// handler.use(isAuthenticatedUser).get(getProduct);
              
export default handler; 



                    


