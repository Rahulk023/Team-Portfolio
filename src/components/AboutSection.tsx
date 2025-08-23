export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-secondary/30 to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          About Our Team
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            We are a diverse group of passionate professionals who came together with a shared vision: 
            to create digital experiences that inspire, engage, and deliver real value to our clients.
          </p>
          <p>
            Our team combines years of experience across various disciplines - from cutting-edge 
            development and intuitive design to strategic marketing and data-driven insights. 
            We believe in the power of collaboration and continuous learning.
          </p>
          <p>
            What sets us apart is our commitment to understanding each client's unique needs and 
            crafting tailored solutions that exceed expectations. We don't just build products; 
            we build relationships and help businesses thrive in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};