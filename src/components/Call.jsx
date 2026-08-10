import { FaPhone } from "react-icons/fa";

function Call() {
  return (
    <a
      href="tel:+919446146644"
      className="w-9 h-9 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition"
    >
      <FaPhone className="rotate-100" size={16} />
    </a>
  );
}

export default Call;