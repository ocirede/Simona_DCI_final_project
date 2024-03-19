import User from "../models/userSchema.js"

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

// if it will be needed 
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send({ success: true, users });
    } catch (error) {
        console.error("Error fetching all users:", error.message);
        res.send({ success: false, error: error.message });
    }
};