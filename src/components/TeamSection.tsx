import { TeamCard } from "./TeamCard";
import balajiImage from "@/assets/team-balaji.jpg";
import rahulImage from "@/assets/team-rahul.jpg";
import raghulImage from "@/assets/team-raghul.jpg";

const teamMembers = [
  {
    id: "sarah",
    name: "Balaji",
    role: "Lead Developer",
    image: balajiImage,
    description: "Full-stack developer with 8+ years of experience in building scalable web applications."
  },
  {
    id: "david",
    name: "Rahul",
    role: "FUll Stack Developer",
    image: rahulImage,
    description: "Creative designer passionate about crafting intuitive user experiences and beautiful interfaces."
  },
  {
    id: "emily",
    name: "Raghul",
    role: "UI Ux",
    image: raghulImage,
    description: "Strategic marketer with expertise in digital campaigns and brand storytelling."
  },

];

export const TeamSection = () => {
  return (
    <section id="team-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Creative Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the talented individuals who bring our vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};