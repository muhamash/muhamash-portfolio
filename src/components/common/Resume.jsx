export default function Resume() {
    return (
        <div className=" bg-gradient-to-r from-yellow-500 via-cyan-600 via-blue-400 to-green-600 md:w-[150px] w-[270px] p-[1px] rounded-lg">
            <button className="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative z-10">Resume</span>
            </button>
        </div>
    );
}
