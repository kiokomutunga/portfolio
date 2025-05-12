import project1 from "../assets/portfolio-1.png";
import project2 from "../assets/portfolio-2.png";
import project3 from "../assets/portfolio-3.png";

export default function Portfolio() {
  const works = [
    {
      image: project1,
      title: "UI Design - Fitness App",
    },
    {
      image: project2,
      title: "UX Case Study - Travel App",
    },
    {
      image: project3,
      title: "Branding - Fashion Brand",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-center" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Latest Work</h2>
        <p className="text-sm text-gray-600 mb-12">
          A selection of recent projects that showcase my design expertise and creative thinking.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow hover:shadow-md transition">
              <img src={work.image} alt={work.title} className="w-full h-60 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
