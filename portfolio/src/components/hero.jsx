import profile from "../assets/hero-profile.png";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white py-20 px-4 text-center" id="home">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Hello 👋</p>
        <h1 className="text-4xl sm:text-5xl font-bold">
          I'm <span className="text-orange-500">Jenny,</span> <br /> Product Designer
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          Jenny's exceptional product design work has contributed to her client's success. Highly recommended.
        </p>

        <div className="flex items-center justify-center mt-6 gap-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Portfolio</button>
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition">Hire Me</button>
        </div>

        <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-600">
          <div>
            <strong className="text-black text-xl">450+</strong><br /> Clients Served
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-orange-500" fill="currentColor" />
            <div>
              <strong className="text-black text-xl">10 Years</strong><br /> Experts
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img src={profile} alt="Jenny" className="w-72 sm:w-80 rounded-full" />
        </div>
      </div>
    </section>
  );
}
