export default function CardElement() {
    return (
        <div className="w-[220px] rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="bg-gray-300 h-[100px] flex items-center justify-center relative">
        <div className="w-[120px] h-[120px] relative">
            <img
            className="w-full h-full rounded-full object-contain bg-gray-700 border-4 border border-gray-800 bg-center absolute top-12"
            style={{ backgroundImage: `url('profile-pic.jpg')`, backgroundPosition: 'center' }}
            />
        </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl uppercase mb-2 mt-16">Replacement name</div>
          <p className="text-gray-700 text-base mb-2">Software Developer</p>
          {/* Part to be changed */}
            
        </div>
        <div className="pl-6 pr-6 pb-4 flex flex-col gap-2 text-center">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Category 1
            </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Category 2
            </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Category 3
            </span>
        </div>
      </div>
    );
}
