import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              [Contact Headline]
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              [Invitation to get in touch, book a call, or ask questions]
            </p>
            
            {/* Booking placeholder */}
            <div className="p-6 bg-muted/30 rounded-lg">
              <p className="font-semibold text-foreground mb-2">Prefer to book a call?</p>
              <p className="text-sm text-muted-foreground mb-4">
                [Calendly or booking widget will go here]
              </p>
              <Button variant="outline">Schedule a Consultation</Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your situation..." 
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
