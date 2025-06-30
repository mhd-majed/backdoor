import React from "react";

interface TechCardProps {
  title: string;
  description: string;
  iconClass: string;
  iconColorClass: string;
  iconBgGradient: string;
}

const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  iconClass,
  iconColorClass,
  iconBgGradient,
}) => {
  return (
    <div className="group card border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-acc/50 hover:scale-105">
      <div className="pt-6 px-6 pb-0 flex justify-start">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${iconBgGradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}
        >
          <i className={`${iconClass} text-xl ${iconColorClass}`}></i>
        </div>
      </div>
      <div className="card-body p-4 text-left">
        <h3 className="card-title text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-grayTone leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const UsedTechSection: React.FC = () => {
  const techList = [
    {
      title: "React",
      description:
        "The library for web and native user interfaces. Built on the latest React features, including Server Components and Actions.",
      iconClass: "fab fa-react",
      iconColorClass: "text-white",
      iconBgGradient: "from-acc/20 to-acc/40",
    },
    {
      title: "Next.js",
      description:
        "The React framework for production. Provides the best developer experience with all features needed for production.",
      iconClass: "fab fa-js-square",
      iconColorClass: "text-black",
      iconBgGradient: "from-white/20 to-white/40",
    },
    {
      title: "TypeScript",
      description:
        "JavaScript with syntax for types. Helps catch errors early through static type checking and provides rich IDE support.",
      iconClass: "fab fa-js-square",
      iconColorClass: "text-blue-400",
      iconBgGradient: "from-blue-500/20 to-blue-500/40",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      iconClass: "fab fa-css3-alt",
      iconColorClass: "text-cyan-400",
      iconBgGradient: "from-cyan-500/20 to-cyan-500/40",
    },
    {
      title: "Node.js",
      description:
        "JavaScript runtime built on Chrome's V8 engine. Enables building scalable network applications with event-driven architecture.",
      iconClass: "fab fa-node-js",
      iconColorClass: "text-green-400",
      iconBgGradient: "from-green-500/20 to-green-500/40",
    },
  ];

  return (
    <section className="usedTechSection bg-pr text-white relative overflow-hidden mb-10">
      <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[70vh] relative z-10">
        {/* Header */}
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            Built on a foundation of fast, production-grade tooling
          </h2>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* React */}
            <TechCard {...techList[0]} />

            {/* Unique Powered By Card */}
            <div className="group card border border-white/10 bg-gradient-to-br from-acc/10 to-acc/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-acc hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-acc/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start p-6 h-full">
                <div className="text-left">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                    <i className="fas fa-bolt text-2xl text-acc"></i>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    Powered By
                  </h3>
                  <p className="text-sm text-white/80">Modern Technologies</p>
                </div>
              </div>
            </div>

            {/* Remaining Cards */}
            {techList.slice(1).map((tech, index) => (
              <TechCard key={index + 1} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTechSection;
