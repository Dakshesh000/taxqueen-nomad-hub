const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
            <span className="text-muted-foreground">[Founder Photo]</span>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              [About Section Headline]
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              [Story and background about Tax Queen - who they are, why they started, 
              their mission to help digital nomads navigate US taxes]
            </p>
            <p className="text-muted-foreground leading-relaxed">
              [Additional paragraph about experience, qualifications, and what makes 
              Tax Queen unique]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
