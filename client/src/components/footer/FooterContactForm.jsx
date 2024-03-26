import { useState } from 'react';
import axios from 'axios'; 

export default function FooterContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/send-email/user-specific`, {
                senderEmail: email,
                subject: 'User Message to DEVs',
                message: message
            });
            setStatus(response.data.message);
        } catch (error) {
            setStatus('Failed to submit form');
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email">Your Email:</label><br />
                <input type="email" id="email" name="email" className="mb-4 mt-2 bg-transparent border-1 border-b focus:outline-none " required onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="message">What are your wishes:</label><br />
                <textarea id="message" name="message" rows="1" cols="20" className="mt-2 bg-transparent border-1 border-b focus:outline-none" required onChange={(e) => setMessage(e.target.value)}></textarea>

                <input type="submit" value="Submit" className="cursor-pointer mt-4 text-[26px] text-left text-retroRed text-glow transition-colors" />
            </form>
            {status && <p>{status}</p>}
        </div>
    );
}

