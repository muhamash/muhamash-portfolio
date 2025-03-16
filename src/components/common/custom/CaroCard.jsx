export default function CaroCard() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 via-black/50 backdrop-blur-lg rounded-lg p-6 w-80 border border-white border-opacity-50">
        <div className="flex items-center gap-3">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User Avatar" 
            className="w-12 h-12 rounded-full border border-white border-opacity-30"
          />
          <div>
            <h3 className="text-white text-lg font-semibold">John Doe</h3>
            <p className="text-gray-300 text-sm">Verified Buyer</p>
          </div>
        </div>
        <p className="mt-4 text-gray-200 text-sm">
          "This product is absolutely amazing! The quality is top-notch, and the experience has been seamless. Highly recommend!"
        </p>
        <div className="flex gap-1 mt-3">
          {Array(5).fill().map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.348 4.14a1 1 0 00.95.69h4.356c.969 0 1.371 1.24.588 1.81l-3.52 2.556a1 1 0 00-.364 1.118l1.347 4.141c.3.92-.755 1.688-1.54 1.118l-3.52-2.556a1 1 0 00-1.176 0l-3.52 2.556c-.784.57-1.838-.198-1.54-1.118l1.347-4.141a1 1 0 00-.364-1.118L2.163 9.567c-.783-.57-.38-1.81.588-1.81h4.356a1 1 0 00.95-.69l1.348-4.14z" />
            </svg>
          ))}
        </div>
      </div>
  )
}