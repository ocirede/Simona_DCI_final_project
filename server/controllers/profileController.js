// User About section
export const handleUpdateAbout = async (req, res) => {
    try {
        const { about } = req.body;
        
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, { about });

        res.status(200).json({ message: 'About text saved successfully.' });
    } catch (error) {
        console.error('Error saving about text:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}