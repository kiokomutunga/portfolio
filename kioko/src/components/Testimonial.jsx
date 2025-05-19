import client from "../assets/testimonial-client.png";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-20 px-4 bg-gray-50 text-center" id="testimonial">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-gray-500 mb-4">Testimonial</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What My Clients Say</h2>
        <p className="text-lg italic text-gray-700 mb-6">
          "Working with Jenny was an absolute pleasure. She understood our needs and delivered beyond expectations."
        </p>
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-orange-500" fill="currentColor" />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <img src={client} alt="Client" className="w-16 h-16 rounded-full mb-2" />
          <p className="font-semibold">John Smith</p>
          <p className="text-sm text-gray-500">CEO, TechCorp</p>
        </div>
      </div>
    </section>
  );
}
