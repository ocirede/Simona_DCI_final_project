import User from "../models/userSchema.js";

// User About section
export const handleUpdateAbout = async (req, res) => {
    try {
        const { about } = req.body;
        if (!about || about.trim() === '') {
            return res.status(400).json({ error: 'About text cannot be empty.' });
        }
        const userId = req.params.userId;
        if (!userId || userId !== req.user.id) {
            return res.status(403).json({ error: 'Unauthorized.' });
        }
        const updatedUser = await User.findByIdAndUpdate(userId, { about }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.status(200).json({ message: 'About text saved successfully.', user: updatedUser });
    } catch (error) {
        console.error('Error saving about text:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

// Tags section / Interests
export const handleInterests = async (req, res) => {
    const { userId } = req.params;
    const { interest } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      user.interests.push(interest);
      await user.save();
  
      return res.status(201).json({ message: "Interest added successfully", user });
    } catch (error) {
      console.error("Error adding interest:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
};

// delete Interests
export const deleteInterests = async (req, res) => {
    const { userId } = req.params;
    const { interestId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const interestIndex = user.interests.indexOf(interestId);

        if (interestIndex === -1) {
            return res.status(404).json({ message: "Interest not found for the user" });
        }

        user.interests.splice(interestIndex, 1);

        await user.save();

        return res.status(200).json({ message: "Interest deleted successfully", user });
    } catch (error) {
        console.error("Error deleting interest:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Tags section / Personality
export const handlePersonality = async (req, res) => {
    const { userId } = req.params;
    const { personality } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      user.personality.push(personality);
      await user.save();
  
      return res.status(201).json({ message: "Personality added successfully", user });
    } catch (error) {
      console.error("Error adding personality:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
};

// delete Personality
export const deletePersonality = async (req, res) => {
    const { userId } = req.params;
    const { personalityId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const personalityIndex = user.personality.indexOf(personalityId);

        if (personalityIndex === -1) {
            return res.status(404).json({ message: "Personality not found for the user" });
        }

        user.personality.splice(personalityIndex, 1);

        await user.save();

        return res.status(200).json({ message: "Personality deleted successfully", user });
    } catch (error) {
        console.error("Error deleting personality:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};