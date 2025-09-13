export default function Button({ children }) {
  return (
    <button className="bg-[#F6BC42] text-[#4F3E11] font-bold px-5 py-3 rounded-xl hover:bg-[#CE9622] transition">
      {children}
    </button>
  );
}
