
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

export const getArtists = async (req, res) => {

    const {role} = req.query

    try {
        let filter = {}
        if (role) {
            filter.role = {$regex: role, $options: "i"};

        }

        const artists = await User.find(filter);

        res.send({success:true, artists})
    } catch (error) {
        console.error("Error fetching the artists", error.message)
        res.send({succsess:false, error:error.message})
    }
}

export const getEntrepreneurs= async (req, res) => {

    const {role} = req.query

    try {
        let filter = {}
        if (role) {
            filter.role = {$regex: role, $options: "i"};

        }

        const entrepreneurs = await User.find(filter);

        res.send({success:true, entrepreneurs})
    } catch (error) {
        console.error("Error fetching the Entrepreneurs", error.message)
        res.send({succsess:false, error:error.message})
    }
}

//Send connect request
export const sendConnectionRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const sender = await User.findById(senderId);
    if (!sender) {
      return res.status(404).send({
        success: false,
        error: "Sender not found",
      });
    }

    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).send({
        success: false,
        error: "Receiver not found",
      });
    }

    const isInSendersRequests = sender.sentRequests.includes(receiverId);
    const isInReceiversPendingRequests =
      receiver.pendingRequests.includes(senderId);

    if (isInSendersRequests && isInReceiversPendingRequests) {
      sender.sentRequests = sender.sentRequests.filter(
        (id) => id.toString() !== receiverId
      );
      receiver.pendingRequests = receiver.pendingRequests.filter(
        (id) => id.toString() !== senderId
      );
    } else {
      sender.sentRequests.push(receiverId);
      receiver.pendingRequests.push(senderId);
    }
    await sender.save();
    await receiver.save();

    await sender.populate("sentRequests");
    await sender.populate("connections");
    await sender.populate("pendingRequests");

    res.send({
      success: true,
      sender,
    });
  } catch (error) {
    console.error("Error sending connection request", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};

//Accept connection request
export const acceptConnectionRequest = async (req, res) => {
  const { receiverId, senderId } = req.body;

  try {
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).send({
        success: false,
        error: "Receiver not found",
      });
    }

    const sender = await User.findById(senderId);
    if (!sender) {
      return res.status(404).send({
        success: false,
        error: "Sender not found",
      });
    }

    receiver.pendingRequests = receiver.pendingRequests.filter(
      (id) => id.toString() !== senderId
    );

    sender.sentRequests = sender.sentRequests.filter(
      (id) => id.toString() !== receiverId
    );

    receiver.connections.push(senderId);
    sender.connections.push(receiverId);

    await receiver.save();
    await sender.save();

    await receiver.populate("sentRequests");
    await receiver.populate("pendingRequests");
    await receiver.populate("connections");

    res.send({
      success: true,
      receiver,
    });
  } catch (error) {
    console.error("Error accepting connection request", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};

//Reject connection request
export const rejectConnectionRequest = async (req, res) => {
  const { receiverId, senderId } = req.body;

  try {
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).send({
        success: false,
        error: "Receiver not found",
      });
    }

    const sender = await User.findById(senderId);
    if (!sender) {
      return res.status(404).send({
        success: false,
        error: "Sender not found",
      });
    }

    receiver.pendingRequests = receiver.pendingRequests.filter(
      (id) => id.toString() !== senderId
    );

    sender.sentRequests = sender.sentRequests.filter(
      (id) => id.toString() !== receiverId
    );

    await receiver.save();
    await sender.save();

    await receiver.populate("sentRequests");
    await receiver.populate("pendingRequests");
    await receiver.populate("connections");

    res.send({
      success: true,
      receiver,
    });
  } catch (error) {
    console.error("Error rejecting connection request", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};

//Delete connection
export const deleteConnection = async (req, res) => {
  const { userId, connectionId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        error: "User not found",
      });
    }

    const connection = await User.findById(connectionId);
    if (!connection) {
      return res.status(404).send({
        success: false,
        error: "Sender not found",
      });
    }

    user.connections = user.connections.filter(
      (id) => id.toString() !== connectionId
    );

    connection.connections = connection.connections.filter(
      (id) => id.toString() !== userId
    );

    await user.save();
    await connection.save();

    await user.populate("sentRequests");
    await user.populate("pendingRequests");
    await user.populate("connections");

    res.send({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error deleting the connection", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};

export const signInHandling = async (req, res) =>{
  try {
      const{error, value} = loginValidator(req.body);
      if(error){
          return res.status(400).json({message: error.details});
      }
      const {password, email} = value;
      const user = await User.findOne({email});
      if(!user){
          return res.status(404).send("User not found");
      }
      const isMatched = await bcrypt.compare(password, user.password);
      if(!isMatched || !user){
          return res.status(400).send("Wrong email or password")
      }

      if(!user.verified){
          return res.json({
              success: false,
              error: "Email not verified"
          });
      }
      const token = jwt.sign({id: user._id }, process.env.JWT_SECTER_KEY, {
          expiresIn: "1d",
      });
      res.json({token, user});
      console.log(user)

  } catch (error) {
      res.status(500).json({success: false, error: error.message});
  }

}

