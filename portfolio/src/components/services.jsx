import design from "../assets/service-design.png";
import research from "../assets/service-research.png";
import branding from "../assets/service-branding.png";

export default function Services() {
  const services = [
    {
      icon: design,
      title: "Product Design",
      description: "Figma design that turns user problems into elegant UI/UX solutions.",
    },
    {
      icon: research,
      title: "UX Research",
      description: "Research-based user insights that inform better design decisions.",
    },
    {
      icon: branding,
      title: "Brand Identity",
      description: "Building timeless, consistent and relatable brand experiences.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 text-center" id="service">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services I Provide</h2>
        <p className="text-sm text-gray-600 mb-12">
          I offer a range of services that transform digital products and user experiences.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition text-left"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
