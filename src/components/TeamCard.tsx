import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/team/${member.id}`);
  };

  return (
    <Card 
      className="team-card cursor-pointer p-6 text-center border-0 shadow-[var(--shadow-card)]"
      onClick={handleClick}
    >
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
      <p className="text-primary font-medium mb-3">{member.role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
    </Card>
  );
};