export default function ContactForm() {
    return (
        <div className="w-full md:w-[500px] h-fit flex flex-col gap-3 text-left items-center md:items-start justify-center bg-black/50 backdrop-blur-md md:p-10 p-3 rounded-md">
            <h2 className="text-[30px] md:text-[25px] font-bold  mb-6 text-violet-300">Send me, what's going on your mind!</h2>
            <form className="space-y-4 w-full">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none bg-black/40 backdrop-blur-sm"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none bg-black/40 backdrop-blur-sm"
                        placeholder="Type your message here..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}