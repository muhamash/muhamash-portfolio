export default function HireMeButton() {
  return (
    <div className=" bg-gradient-to-r from-violet-500 via-cyan-600 via-sky-400 to-slate-400 w-[130px] p-[1px] rounded-lg">
      <button className="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg w-full group">
        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></span>
        <span className="relative z-10">Hire Me!</span>
      </button>
    </div>
  );
}