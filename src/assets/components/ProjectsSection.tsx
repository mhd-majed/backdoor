import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  tags,
}) => (
  <div className="group relative h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
    <img
      src={imageSrc}
      alt={altText}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-acc transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-white/80 mb-3 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="badge badge-outline border-acc/50 text-acc text-xs bg-black/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-10 h-10 bg-acc/80 rounded-full flex items-center justify-center backdrop-blur-sm">
        <i className="fas fa-external-link-alt text-white text-sm"></i>
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      imageSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      altText: "E-Commerce Platform",
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with real-time inventory management",
      tags: ["React", "Next.js"],
    },
    {
      imageSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      altText: "SaaS Dashboard",
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      tags: ["TypeScript", "Node.js"],
    },
    {
      imageSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      altText: "Mobile App",
      title: "Mobile App",
      description: "Cross-platform app with seamless user experience",
      tags: ["React Native", "Firebase"],
    },
    {
      imageSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      altText: "AI Platform",
      title: "AI Platform",
      description: "Intelligent automation with machine learning algorithms",
      tags: ["Python", "TensorFlow"],
    },
  ];

  return (
    <section className="projectsSection bg-pr text-white relative overflow-hidden mb-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-acc rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-grayTone rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[70vh] relative z-10">
        {/* Header Section */}
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            Proud Projects That make Us Stand Out
          </h2>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full mb-6"></div>
          <p className="text-p py-2 max-w-3xl mx-auto text-grayTone leading-relaxed">
            Used by some of the world's largest companies, Next.js enables you
            to create high-quality web applications with the power of React
            components.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
