export default function FooterContactForm() {
    return (
        <div>
            <form action="/submit_form" className="flex flex-col">
                <label htmlFor="email">Your Email:</label><br />
                <input type="email" id="email" name="email" className="mb-4 mt-2 bg-transparent border-1 border-b focus:outline-none " required  />

                <label htmlFor="message">What are your wishes:</label><br />
                <textarea id="message" name="message" rows="1" cols="20" className="mt-2 bg-transparent border-1 border-b focus:outline-none" required></textarea>

                <input type="submit" value="Submit" className="cursor-pointer mt-4 text-[26px] text-left text-gray-400 hover:text-gray-700 transition-colors" />
            </form>
        </div>
    );
}
