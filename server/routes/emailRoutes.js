import express from 'express';
import sendEmail from '../verification/emailFooterUserMessage.js'; 

const router = express.Router();

router.post('/user-specific', async (req, res) => {
    const { senderEmail, subject, message } = req.body;

    try {
        const result = await sendEmail(senderEmail, subject, message);
        
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

export default router;
