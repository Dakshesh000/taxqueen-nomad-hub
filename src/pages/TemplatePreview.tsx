import SubPageLayout from "@/components/layout/SubPageLayout";
import { Button } from "@/components/ui/button";
import rvCoastalDrive from "@/assets/lifestyle/rv-coastal-drive.png";

const TemplatePreview = () => {
  return (
    <SubPageLayout
      bannerImage={rvCoastalDrive}
      bannerAlt="Sample banner image"
      pageTitle="Sample Page Title"
    >
      {/* Sample content to demonstrate layout */}
      <div className="space-y-12 pb-16">
        
        {/* Intro Section */}
        <section className="text-center">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This is a sample introduction paragraph that would describe the page content. 
            It uses muted foreground color for readable secondary text.
          </p>
        </section>

        {/* Content Block Example */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground uppercase tracking-wide">
            Section Heading
          </h2>
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            This is body content that would contain the main information for this section. 
            The layout uses a max-width of 4xl (56rem / 896px) for optimal readability 
            on larger screens while maintaining comfortable line lengths.
          </p>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Bullet point item demonstrating list styling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Another bullet point with relevant information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Third item to show consistent spacing</span>
            </li>
          </ul>
        </section>

        {/* Card/Highlight Box Example */}
        <section className="bg-muted/30 rounded-lg p-6 sm:p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Highlighted Information Box
          </h3>
          <p className="text-muted-foreground mb-6">
            This box style can be used for callouts, important information, 
            pricing details, or any content that needs visual separation.
          </p>
          <Button variant="cta" size="lg">
            Get Started
          </Button>
        </section>

        {/* Two Column Example (within single column) */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground uppercase">
              Feature One
            </h3>
            <p className="text-muted-foreground">
              Description of the first feature or service aspect.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground uppercase">
              Feature Two
            </h3>
            <p className="text-muted-foreground">
              Description of the second feature or service aspect.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center pt-8 border-t border-border">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            A closing call-to-action that encourages the visitor to take the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
};

export default TemplatePreview;
