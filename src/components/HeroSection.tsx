import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToTeam = () => {
    document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Meet Our Amazing
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Creative Team
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We're a passionate group of designers, developers, and innovators 
          dedicated to creating exceptional digital experiences.
        </p>
        <Button 
          onClick={scrollToTeam}
          size="lg"
          className="btn-hero text-primary-foreground px-8 py-4 text-lg"
        >
          Meet the Team
        </Button>
      </div>
    </section>
  );
};