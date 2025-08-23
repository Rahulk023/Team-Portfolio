import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center team-card border-0 shadow-[var(--shadow-card)]">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">hello@ourteam.com</p>
          </Card>

          <Card className="p-6 text-center team-card border-0 shadow-[var(--shadow-card)]">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </Card>

          <Card className="p-6 text-center team-card border-0 shadow-[var(--shadow-card)]">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Office</h3>
            <p className="text-muted-foreground">San Francisco, CA</p>
          </Card>

          <Card className="p-6 text-center team-card border-0 shadow-[var(--shadow-card)]">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
            <p className="text-muted-foreground">Available 24/7</p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="btn-hero text-primary-foreground px-8 py-4 text-lg"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};