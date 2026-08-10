import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/917907016692"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center bg-[#25D366] text-white px-2 py-2 rounded-4xl font-semibold hover:bg-[#128C7E] transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default Whatsapp;