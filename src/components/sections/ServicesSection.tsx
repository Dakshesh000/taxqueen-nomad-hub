import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder services - to be replaced with actual content
const services = [
  {
    title: "[Service 1]",
    description: "[Description of service 1]",
  },
  {
    title: "[Service 2]",
    description: "[Description of service 2]",
  },
  {
    title: "[Service 3]",
    description: "[Description of service 3]",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            [Services Headline]
          </h2>
          <p className="text-muted-foreground">
            [Brief intro to the services offered]
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
