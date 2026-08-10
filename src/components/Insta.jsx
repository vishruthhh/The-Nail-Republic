import { FaInstagram } from "react-icons/fa";

function Insta() {
  return (
    <a
      href="https://www.instagram.com/nail_republic_kochi/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-2 py-2 rounded-4xl font-semibold hover:bg-pink-600 transition"
    >
      <FaInstagram size={24} />
    </a>
  );
}

export default Insta;