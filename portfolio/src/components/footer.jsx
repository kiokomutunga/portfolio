import { Facebook, Twitter, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-10 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">Jenny.</h1>

        <ul className="flex justify-center gap-6 text-sm text-gray-600 mb-6 flex-wrap">
          <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
          <li><a href="#service" className="hover:text-orange-500 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-orange-500 transition">Portfolio</a></li>
          <li><a href="#testimonial" className="hover:text-orange-500 transition">Testimonials</a></li>
        </ul>

        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Dribbble className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-gray-400">&copy; 2025 Jenny. All rights reserved.</p>
      </div>
    </footer>
  );
}
