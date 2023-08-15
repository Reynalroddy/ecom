import { getSession } from "next-auth/react";
import ErrorHandler from "../utils/errorHandler";

export const isAuthenticatedUser = async (req, res, next) => {
  const session = await getSession({ req });
// console.log(session,req)
  if (!session) {
    return next(new ErrorHandler("Login first to access this route", 401));
  }

  req.user = session.user;
// console.log('guy')
  next();
};

// export { isAuthenticatedUser };