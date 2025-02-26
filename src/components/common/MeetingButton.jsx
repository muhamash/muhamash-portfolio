export default function MeetingButton() {
    return (
        <div className=" bg-gradient-to-r from-pink-500 via-sky-600 to-teal-600 w-[200px] p-[1px] rounded-lg">
            <button className="relative p-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative z-10">Schedule a meeting?</span>
            </button>
        </div>
    );
}
