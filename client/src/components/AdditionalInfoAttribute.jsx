export default function AdditionalInfoAttribute({ text }) {
    return (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {text}
        </div>
    );
}

