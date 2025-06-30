import React from "react";
import WorldMap from "./WorldMap";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="card bg-pr flex-shrink flex-grow basis-1/4 min-w-[165px] shadow-sm">
    <div className="card-body pt-6 px-6 pb-0 text-center">
      <h2 className="card-title mx-auto text-h5">{value}</h2>
      <p className="text-pSm">{label}</p>
    </div>
  </div>
);

const AchievementSection: React.FC = () => {
  const stats = [
    { value: "500+", label: "Worker" },
    { value: "120+", label: "Projects" },
    { value: "80+", label: "Clients" },
    { value: "30+", label: "Countries" },
  ];

  return (
    <section className="achievementSection mb-10">
      <div className="flex flex-col bg-pr text-white items-center justify-center gap-4 p-4 min-h-[70vh]">
        {/* Header */}
        <div className="max-w-6xl text-center">
          <h2 className="text-h2 font-heading font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-grayTone bg-clip-text text-transparent">
            Our Global Impact
          </h2>
          <p className="text-p py-6 mb-5 max-w-3xl mx-auto text-grayTone leading-relaxed">
            Trusted by industry leaders worldwide, we've delivered exceptional
            results across continents, building a legacy of innovation and
            excellence in every project we undertake.
          </p>
          <div className="w-24 h-1 bg-acc mx-auto rounded-full"></div>
        </div>

        {/* Chart Placeholder */}
        <div className="flex items-center justify-center w-full max-w-[1000px] mx-auto">
          <WorldMap />
        </div>

        {/* Stats Grid */}
        <div className="flex flex-nowrap md:flex-row flex-col gap-4 p-4 w-full max-w-[1200px]">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
