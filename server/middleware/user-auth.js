import jwt from "jsonwebtoken";

//This is the authenticstion middleware,
//It decodes and verifies the token stored in local storage
//Inside the token is stored the user id, when it is decoded
const auth = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECTER_KEY);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default auth;
