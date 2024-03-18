import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerValidator } from "../validator/user-validator.js";
import { emailVerification } from "../verification/emailVerification.js";

//Register user
export const handleRegister = async (req, res) => {
  try {
    const saltRounds = 10;
    const { error, value } = registerValidator(req.body);

    if (error) {
      return res.status(400).json({ message: error.details });
    }

    const { email, password, role, categories } = value;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      email,
      password: hashedPassword,
      role,
      categories,
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECTER_KEY,
      {
        expiresIn: "1d",
      }
    );

    emailVerification(token, newUser.email);

    res.send({ success: true, newUser });
    console.log("New user created successfully:", newUser);
  } catch (error) {
    console.error("Error creating the user");
    res.status(500).json({ success: false, error: error.message });
  }
};

//email confirmation
export const emailConfirmation = async (req, res) => {
  try {
    const token = jwt.verify(req.params.token, process.env.JWT_SECTER_KEY);

    if (token) {
      await User.findByIdAndUpdate(
        token.userId,
        { verified: true },
        { new: true }
      );
    }

    res.send({ success: true });
  } catch (error) {
    console.log("Error in email confirmation:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
