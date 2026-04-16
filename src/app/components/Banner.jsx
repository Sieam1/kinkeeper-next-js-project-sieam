import { FaUserPlus } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="hero bg-base-200 mx-4 md:mx-6 my-6 rounded-xl px-4">
      <div className="hero-content text-center py-10 md:py-16">
        <div className="max-w-2xl">
          
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-tight">
            Friends to keep close in your life
          </h1>

        
          <p className="py-4 text-gray-500 text-sm md:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>

        
          <button className="btn bg-[#064e3b] hover:bg-[#043d2e] text-white border-none gap-2 px-5 md:px-6 shadow-md transition-all">
            <FaUserPlus />
            Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
}