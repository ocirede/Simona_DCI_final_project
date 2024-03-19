// import PlayfulTag from './PlayfulTag'; 

export default function CardElement({ user }) {
    const { address, profileImage } = user;

    if (!address) {
        console.log("Address or interests not available");
        return null; 
    }

    const { firstname, lastname } = address;

    return (
        <div className="w-[220px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="bg-gray-300 h-[100px] flex items-center justify-center relative">
                <div className="w-[120px] h-[120px] relative">
                    <img
                        className="w-full h-full rounded-full object-cover bg-gray-700 border-4 border border-gray-800 bg-center absolute top-12"
                        src={profileImage}
                        alt={`${firstname} ${lastname}`}
                    />
                </div>
            </div>
            <div className="px-6 py-4 text-center">
                <h4 className="font-bold text-xl uppercase mb-2 mt-16">
                    {firstname} {lastname} 
                </h4>
                <p>{user.role}</p>
            </div>
            <div className="px-6 py-2">
                {/* <div className="flex flex-wrap justify-center gap-2">
                    {interests.map((interest, index) => (
                        <PlayfulTag key={index} text={interest} />
                    ))}
                </div> */}
            </div>
        </div>
    );
}



