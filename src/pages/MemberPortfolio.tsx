import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import balajiImage from "@/assets/team-balaji.jpg";
import rahulImage from "@/assets/team-rahul.jpg";
import raghulImage from "@/assets/team-raghul.jpg";
import alexImage from "@/assets/team-sarah.jpg";
import lisaImage from "@/assets/team-lisa.jpg";

const memberData = {
  sarah: {
    name: "Balaji",
    role: "Lead Developer",
    image: balajiImage,
    bio: "Balaji  is a passionate full-stack developer with over 8 years of experience in building scalable web applications. She specializes in React, Node.js, and cloud architecture. Sarah leads our development team and ensures code quality and best practices across all projects.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    experience: "8+ years",
    education: "Bachelor of Engineering, Karpagam Institute of Technology",
    projects: [
      { name: "E-commerce Platform", description: "Built a scalable e-commerce solution serving 100k+ users", link: "#" },
      { name: "Healthcare Dashboard", description: "Created a real-time analytics dashboard for healthcare providers", link: "#" },
      { name: "Mobile Banking App", description: "Developed secure mobile banking features", link: "#" }
    ]
  },
  david: {
    name: "Rahul",
    role: "Full Stackdeveloper",
    image: rahulImage,
    bio: "Rahul is a creative Full Stackdeveloper with a passion for crafting intuitive user experiences. He has worked with startups and Fortune 500 companies, always focusing on user-centered design principles. His designs have improved user engagement by up to 40%.",
    skills: ["React JS", "Javascript", "MongoDB", "MYSQL", "SQL Server", "Laravel","AZURE"],
    experience: "6+ years",
    education: "Bachelor of Engineering, Karpagam Institute of Technology",
    projects: [
      { name: "SaaS Dashboard Redesign", description: "Redesigned enterprise dashboard improving user efficiency by 35%", link: "#" },
      { name: "Mobile App Interface", description: "Created award-winning mobile app interface for fintech startup", link: "#" },
      { name: "E-learning Platform", description: "Designed comprehensive learning platform used by 50k+ students", link: "#" }
    ]
  },
  emily: {
    name: "Raghul",
    role: "Digital Marketing/UI-UX",
    image: raghulImage,
    bio: "Emily is a strategic marketing specialist with expertise in digital campaigns and brand storytelling. She has helped numerous companies build their online presence and achieve significant growth through data-driven marketing strategies.",
    skills: ["Digital Marketing", "Content Strategy", "Social Media", "Brand Development","React JS","Mongo DB"],
    experience: "5+ years",
    education: "Bachelor of Engineering, Karpagam Institute of Technology",
    projects: [
      { name: "Brand Launch Campaign", description: "Led successful brand launch resulting in 200% growth in first year", link: "#" },
      { name: "Content Marketing Strategy", description: "Developed content strategy increasing organic traffic by 300%", link: "#" },
      { name: "Social Media Campaigns", description: "Created viral social campaigns with 10M+ impressions", link: "#" }
    ]
  },
 
};

export const MemberPortfolio = () => {
  const { id } = useParams<{ id: string }>();
  const member = id ? memberData[id as keyof typeof memberData] : null;

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Member not found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Team
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Mail className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">{member.name}</h1>
          <p className="text-2xl text-primary font-semibold mb-6">{member.role}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {member.bio}
          </p>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills */}
          <Card className="p-6 team-card border-0 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold text-foreground mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6 team-card border-0 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold text-foreground mb-4">Experience</h3>
            <p className="text-2xl font-bold text-primary mb-2">{member.experience}</p>
            <p className="text-muted-foreground">{member.education}</p>
          </Card>

          {/* Contact */}
          <Card className="p-6 team-card border-0 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 bg-gradient-to-r from-secondary/30 to-accent/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {member.projects.map((project, index) => (
              <Card key={index} className="p-6 team-card border-0 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button size="sm" variant="outline" className="gap-2">
                  View Project <ExternalLink className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};