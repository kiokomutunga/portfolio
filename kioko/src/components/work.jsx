export default function WorkExperience() {
  const experiences = [
    {
      company: "Figma Inc.",
      title: "Lead Product Designer",
      years: "2020 - Present",
      description: "Led a team of designers to create user-centric design systems for global brands."
    },
    {
      company: "Behance",
      title: "UI/UX Designer",
      years: "2017 - 2020",
      description: "Worked on award-winning mobile and web design projects."
    },
    {
      company: "Upwork",
      title: "Freelance Designer",
      years: "2015 - 2017",
      description: "Delivered over 150 projects with top-rated feedback across multiple platforms."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white text-center" id="experience">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-4">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-8 text-left">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold">{exp.title} @ {exp.company}</h3>
              <p className="text-sm text-gray-500">{exp.years}</p>
              <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
