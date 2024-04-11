import jwt from "jsonwebtoken";

// This is the authenticstion middleware,
// It decodes and verifies the token stored in local storage
// Inside the token is stored the user id, when it is decoded
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


// import jwt from "jsonwebtoken";
// import User from "../models/userSchema.js";

// const auth = async (req, res, next) => {
// 	try {
//     const token = req.headers.authorization || req.headers.Authorization;

// 		if (!token) {
// 			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
// 		}

// 		const decoded = jwt.verify(token,process.env.JWT_SECTER_KEY);

// 		if (!decoded) {
// 			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
// 		}

// 		const user = await User.findById(decoded.userId).select("-password");

// 		if (!user) {
// 			return res.status(404).json({ error: "User not found" });
// 		}

// 		req.user = user;

// 		next();
// 	} catch (error) {
// 		console.log("Error in protectRoute middleware: ", error.message);
// 		res.status(500).json({ error: "Internal server error" });
// 	}
// };

// export default auth;

