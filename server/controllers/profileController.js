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