import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  FileText, 
  Users, 
  Shield, 
  Clock, 
  Check, 
  X, 
  Play, 
  ArrowRight,
  MapPin,
  Award,
  Compass,
  Sparkles,
  Heart
} from "lucide-react";
import { motion, useInView } from "motion/react";

// Images
import rvCoastalDrive from "@/assets/lifestyle/rv-coastal-drive.png";
import womanWorkingViews from "@/assets/lifestyle/woman-working-views.jpg";
import heatherHikingNature from "@/assets/lifestyle/heather-hiking-nature.jpg";
import workingAtBeach from "@/assets/lifestyle/working-at-beach.jpg";
import vanSnowMountains from "@/assets/lifestyle/van-snow-mountains.jpg";
import rvAutumnLeaves from "@/assets/lifestyle/rv-autumn-leaves.jpg";
import sunsetRvReflection from "@/assets/lifestyle/sunset-rv-reflection.png";
import campingByRiver from "@/assets/lifestyle/camping-by-river.jpg";
import freedomNomad from "@/assets/lifestyle/freedom-nomad.jpg";
import truckDesert from "@/assets/lifestyle/truck-desert.jpeg";
import heatherPortrait from "@/assets/heather/portrait-square.png";
import taxPrep1 from "@/assets/services/tax-preparation-1.jpg";

// ============================================
// SECTION HEADER COMPONENT
// ============================================
const SectionHeader = ({ 
  category, 
  title, 
  description 
}: { 
  category: string; 
  title: string; 
  description?: string;
}) => (
  <div className="mb-8 pb-4 border-b border-border">
    <p className="text-primary font-medium uppercase tracking-widest text-sm mb-2">{category}</p>
    <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase">{title}</h2>
    {description && <p className="text-muted-foreground mt-2">{description}</p>}
  </div>
);

// ============================================
// ANIMATED COUNTER COMPONENT
// ============================================
const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ============================================
// COLOR SWATCH COMPONENT
// ============================================
const ColorSwatch = ({ 
  name, 
  variable, 
  hsl, 
  className 
}: { 
  name: string; 
  variable: string; 
  hsl: string; 
  className: string;
}) => (
  <div className="space-y-2">
    <div className={`w-full h-20 rounded-lg border border-border ${className}`} />
    <p className="font-semibold text-foreground text-sm">{name}</p>
    <p className="text-xs text-muted-foreground font-mono">{variable}</p>
    <p className="text-xs text-muted-foreground">{hsl}</p>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================
const DesignGuide = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  // Data
  const colors = [
    { name: "Primary", variable: "--primary", hsl: "201 41% 51%", className: "bg-primary" },
    { name: "Primary Foreground", variable: "--primary-foreground", hsl: "0 0% 100%", className: "bg-primary-foreground border-2" },
    { name: "Background", variable: "--background", hsl: "0 0% 100%", className: "bg-background border-2" },
    { name: "Foreground", variable: "--foreground", hsl: "222.2 84% 4.9%", className: "bg-foreground" },
    { name: "Muted", variable: "--muted", hsl: "210 40% 96.1%", className: "bg-muted" },
    { name: "Muted Foreground", variable: "--muted-foreground", hsl: "215.4 16.3% 46.9%", className: "bg-muted-foreground" },
    { name: "Secondary", variable: "--secondary", hsl: "201 30% 90%", className: "bg-secondary" },
    { name: "Accent", variable: "--accent", hsl: "201 41% 65%", className: "bg-accent" },
    { name: "Destructive", variable: "--destructive", hsl: "0 84.2% 60.2%", className: "bg-destructive" },
    { name: "Border", variable: "--border", hsl: "214.3 31.8% 91.4%", className: "bg-border" },
  ];

  const galleryImages = [
    { src: rvAutumnLeaves, caption: "Autumn adventures on the open road" },
    { src: sunsetRvReflection, caption: "Golden hour reflections" },
    { src: campingByRiver, caption: "Riverside camp setup" },
  ];

  const statsData = [
    { value: 200, suffix: "+", label: "Nomads Served" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "", label: "States Covered" },
    { value: 5, suffix: "★", label: "Star Rating" },
  ];

  const tabbedContent = [
    { id: "overview", label: "Overview", content: "This is the overview tab content. Use tabbed content to organize information in a compact space." },
    { id: "details", label: "Details", content: "Detailed specifications go here. Tabs work great for service breakdowns or FAQ categories." },
    { id: "pricing", label: "Pricing", content: "Pricing information displayed in a clean, organized manner." },
  ];

  const accordionItems = [
    { id: "item-1", question: "What documents do I need?", answer: "You'll need your W-2s, 1099s, receipts for deductions, and any documentation related to your travel and work locations." },
    { id: "item-2", question: "How long does the process take?", answer: "Most returns are completed within 1-2 weeks. Complex situations may take slightly longer." },
    { id: "item-3", question: "Do you handle state taxes?", answer: "Absolutely! We specialize in multi-state tax situations common for digital nomads." },
  ];

  const processSteps = [
    { title: "Discovery Call", description: "We learn about your situation" },
    { title: "Document Collection", description: "Secure upload of documents" },
    { title: "Preparation", description: "We prepare your return" },
    { title: "Filing", description: "Final review and filing" },
  ];

  const comparisonData = {
    without: ["Confusion about state residency", "Missed deductions", "Tax season stress", "Risk of penalties"],
    with: ["Clear domicile strategy", "Maximum deductions captured", "Peace of mind year-round", "Full compliance confidence"],
  };

  const testimonials = [
    { text: "Heather made tax season stress-free for the first time in years!", name: "Sarah M.", role: "Full-Time RVer" },
    { text: "Finally, a tax professional who understands the nomad lifestyle.", name: "Mike T.", role: "Digital Nomad" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Internal Reference</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase mb-6">
              Design Guide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              A comprehensive reference of all design elements, patterns, and components used across the Tax Queen website. 
              Use this guide to maintain consistency when building new pages.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {["Foundation", "Basic Elements", "Content Blocks", "Layout Patterns", "Interactive", "Media", "Data Display", "Page Patterns"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 bg-background rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ============================================ */}
        {/* 1. FOUNDATION */}
        {/* ============================================ */}
        <section id="foundation">
          <SectionHeader 
            category="Foundation" 
            title="Colors, Typography & Spacing" 
            description="The core building blocks of the design system"
          />

          {/* Colors */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Color Palette</h3>
            <p className="text-muted-foreground">All colors use HSL values. Only use these approved colors - no teal or random accents.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {colors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Typography Scale</h3>
            <p className="text-muted-foreground">Font: DM Sans. All headings uppercase.</p>
            <div className="space-y-4 p-6 bg-muted/30 rounded-lg border border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">H1 - text-4xl md:text-5xl lg:text-6xl font-bold uppercase</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase">Page Heading</h1>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">H2 - text-3xl md:text-4xl lg:text-5xl font-bold uppercase</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase">Section Heading</h2>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">H3 - text-xl md:text-2xl font-bold uppercase</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground uppercase">Card Heading</h3>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Body - text-base md:text-lg text-foreground</p>
                <p className="text-base md:text-lg text-foreground">Body text for paragraphs and main content.</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Muted - text-base md:text-lg text-muted-foreground</p>
                <p className="text-base md:text-lg text-muted-foreground">Secondary text and descriptions.</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Eyebrow - text-primary font-medium uppercase tracking-widest text-sm</p>
                <p className="text-primary font-medium uppercase tracking-widest text-sm">Section Label</p>
              </div>
            </div>
          </div>

          {/* Spacing */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground uppercase">Spacing Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-3">Section Padding</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><code className="bg-muted px-2 py-1 rounded">py-16 md:py-24</code> - Standard sections</li>
                  <li><code className="bg-muted px-2 py-1 rounded">py-20 md:py-28</code> - Extra breathing room</li>
                  <li><code className="bg-muted px-2 py-1 rounded">pt-28 pb-16 md:pt-32</code> - Hero sections</li>
                </ul>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-3">Container</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><code className="bg-muted px-2 py-1 rounded">container mx-auto px-4 sm:px-6 lg:px-8</code></li>
                  <li><code className="bg-muted px-2 py-1 rounded">max-w-5xl</code> - Narrow content</li>
                  <li><code className="bg-muted px-2 py-1 rounded">max-w-6xl</code> - Card grids</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 2. BASIC ELEMENTS */}
        {/* ============================================ */}
        <section id="basic-elements">
          <SectionHeader 
            category="Basic Elements" 
            title="Buttons, Inputs & Icons" 
            description="Fundamental UI components"
          />

          {/* Buttons */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Button Variants</h3>
            <div className="flex flex-wrap gap-4 p-6 bg-muted/30 rounded-lg border border-border">
              <div className="space-y-2">
                <Button variant="cta" className="rounded-full">Get Started</Button>
                <p className="text-xs text-muted-foreground">CTA (Primary)</p>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="rounded-full">Learn More</Button>
                <p className="text-xs text-muted-foreground">Outline</p>
              </div>
              <div className="space-y-2">
                <Button variant="default">Default</Button>
                <p className="text-xs text-muted-foreground">Default</p>
              </div>
              <div className="space-y-2">
                <Button variant="ghost">Ghost</Button>
                <p className="text-xs text-muted-foreground">Ghost</p>
              </div>
              <div className="space-y-2">
                <Button size="lg" variant="cta" className="rounded-full">Large CTA</Button>
                <p className="text-xs text-muted-foreground">Large Size</p>
              </div>
              <div className="space-y-2">
                <Button size="sm" variant="cta" className="rounded-full">Small</Button>
                <p className="text-xs text-muted-foreground">Small Size</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Primary CTAs should always use "Get Started" text and <code className="bg-muted px-1 rounded">rounded-full</code>.
            </p>
          </div>

          {/* Form Inputs */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Form Inputs</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
              <div className="space-y-2">
                <Label htmlFor="demo-input">Text Input</Label>
                <Input id="demo-input" placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-email">Email Input</Label>
                <Input id="demo-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="demo-textarea">Textarea</Label>
                <Textarea id="demo-textarea" placeholder="Enter longer text..." rows={3} />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline" className="text-primary border-primary">Primary Outline</Badge>
            </div>
          </div>

          {/* Icons */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground uppercase">Icon Usage</h3>
            <p className="text-muted-foreground">Icons from Lucide React. Use primary color for emphasis.</p>
            <div className="flex flex-wrap gap-6 p-6 bg-muted/30 rounded-lg border border-border">
              {[FileText, Users, Shield, Clock, MapPin, Award, Compass, Sparkles, Heart, ArrowRight].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{Icon.displayName || Icon.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 3. CONTENT BLOCKS */}
        {/* ============================================ */}
        <section id="content-blocks">
          <SectionHeader 
            category="Content Blocks" 
            title="Text, Lists & Quotes" 
            description="Standard content patterns"
          />

          {/* Text Block */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Text Block</h3>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                This is a standard text block for introductory content, descriptions, or body copy. 
                It follows the established typography system with proper line height for readability.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Secondary paragraphs use muted foreground color to create visual hierarchy 
                while maintaining readability.
              </p>
            </div>
          </div>

          {/* Bullet List */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Bullet List</h3>
            <ul className="space-y-3 max-w-xl">
              {["First bullet point with important information", "Second bullet highlighting another key aspect", "Third bullet completing the list", "Fourth bullet for additional detail"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">Use <code className="bg-muted px-1 rounded">bg-primary</code> for bullet dots.</p>
          </div>

          {/* Quote Block */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Quote Block</h3>
            <blockquote className="border-l-4 border-primary pl-6 py-4 max-w-2xl">
              <p className="text-lg md:text-xl italic text-foreground leading-relaxed">
                "This is a quote or testimonial block. Perfect for client feedback or highlighting key messages."
              </p>
              <cite className="text-sm text-muted-foreground mt-4 block not-italic">
                — Client Name, Digital Nomad
              </cite>
            </blockquote>
          </div>

          {/* Highlight Box */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase">Highlight Box</h3>
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border max-w-2xl space-y-4">
              <h4 className="text-xl font-semibold text-foreground uppercase">Callout Title</h4>
              <p className="text-muted-foreground">
                Use this box style for callouts, important information, pricing details, or special offers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" className="rounded-full">Primary Action</Button>
                <Button variant="outline" className="rounded-full">Secondary Action</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 4. LAYOUT PATTERNS */}
        {/* ============================================ */}
        <section id="layout-patterns">
          <SectionHeader 
            category="Layout Patterns" 
            title="Image + Text & Grids" 
            description="Common layout structures"
          />

          {/* Image + Text Left */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Image Left + Text Right</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img src={womanWorkingViews} alt="Digital nomad working" className="w-full h-64 md:h-72 object-cover" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-bold text-foreground uppercase">Content Title</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This layout places an image on the left with text content on the right. 
                  Ideal for showcasing services, team members, or feature highlights.
                </p>
                <Button variant="cta" className="rounded-full">Get Started</Button>
              </div>
            </div>
          </div>

          {/* Image + Text Right */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Text Left + Image Right</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-bold text-foreground uppercase">Content Title</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Alternating image placement creates visual rhythm. This layout flips the image to the right.
                </p>
                <ul className="space-y-2">
                  {["Key feature one", "Key feature two"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={workingAtBeach} alt="Working at beach" className="w-full h-64 md:h-72 object-cover" />
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Full-Width Image</h3>
            <div className="rounded-2xl overflow-hidden">
              <img src={heatherHikingNature} alt="Heather hiking" className="w-full h-[250px] md:h-[300px] object-cover" />
            </div>
            <p className="text-sm text-muted-foreground">Optional caption for the image.</p>
          </div>

          {/* Feature Grid */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">3-Column Feature Grid</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FileText, title: "Feature One" },
                { icon: Users, title: "Feature Two" },
                { icon: Shield, title: "Feature Three" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-muted/30 rounded-2xl border border-border space-y-3">
                  <item.icon className="w-8 h-8 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground uppercase">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">Brief description of this feature or benefit.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image with Overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase">Image with Text Overlay</h3>
            <div className="relative rounded-2xl overflow-hidden">
              <img src={vanSnowMountains} alt="Van in snowy mountains" className="w-full h-[300px] md:h-[350px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wide mb-2">
                  Overlay Heading
                </h4>
                <p className="text-white/90 text-sm md:text-base">Supporting text on the overlay.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 5. INTERACTIVE COMPONENTS */}
        {/* ============================================ */}
        <section id="interactive">
          <SectionHeader 
            category="Interactive" 
            title="Tabs, Accordions & Cards" 
            description="Components with user interaction"
          />

          {/* Tabs */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Tabbed Content</h3>
            <div className="max-w-2xl">
              <div className="flex gap-2 border-b border-border">
                {tabbedContent.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors border-b-2 -mb-px ${
                      activeTab === tab.id 
                        ? "border-primary text-primary" 
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-muted/30 rounded-b-lg border border-t-0 border-border"
              >
                <p className="text-foreground">{tabbedContent.find(t => t.id === activeTab)?.content}</p>
              </motion.div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Expandable Accordion</h3>
            <Accordion type="single" collapsible className="max-w-2xl">
              {accordionItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-border">
                  <AccordionTrigger className="text-left font-semibold uppercase tracking-wide hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Service Card with Hover */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Service Card (Dark Overlay Hover)</h3>
            <p className="text-muted-foreground">Image has dark overlay that fades on hover. Icon badge stays above overlay.</p>
            <div className="max-w-sm">
              <div className="group flex flex-col bg-background rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={taxPrep1} alt="Tax Preparation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0 z-10" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg z-20">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-foreground uppercase mb-2">Service Title</h4>
                  <p className="text-muted-foreground text-sm mb-4">Brief service description for the target audience.</p>
                  <ul className="space-y-2 mb-4">
                    {["Feature one", "Feature two", "Feature three"].map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground font-bold text-sm mb-6">Bold value proposition statement.</p>
                  <Button variant="cta" className="w-full rounded-full mt-auto">Get Started</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Reveal Card */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase">Hover Reveal Card</h3>
            <p className="text-muted-foreground">Full overlay slides up on hover revealing description.</p>
            <div className="max-w-sm">
              <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                <img src={freedomNomad} alt="Service" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h4 className="absolute bottom-4 left-4 text-white text-xl font-semibold uppercase transition-opacity duration-300 group-hover:opacity-0">
                  Card Title
                </h4>
                <div className="absolute inset-0 bg-primary/90 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white text-xl font-semibold uppercase mb-2">Card Title</h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">Full description revealed on hover.</p>
                  <Button variant="outline" size="sm" className="w-fit border-white text-white hover:bg-white hover:text-primary">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 6. MEDIA COMPONENTS */}
        {/* ============================================ */}
        <section id="media">
          <SectionHeader 
            category="Media" 
            title="Video, Carousel & Parallax" 
            description="Rich media components"
          />

          {/* Video Embed */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Video with Play Overlay</h3>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-muted max-w-3xl">
              {showVideoOverlay && (
                <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setShowVideoOverlay(false)}>
                  <img src={truckDesert} alt="Video thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>
              )}
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                title="Video embed"
              />
            </div>
            <p className="text-sm text-muted-foreground">Play button uses <code className="bg-muted px-1 rounded">bg-primary</code> with scale animation on hover.</p>
          </div>

          {/* Image Carousel */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Image Carousel</h3>
            <Carousel opts={{ loop: true }} className="max-w-3xl">
              <CarouselContent>
                {galleryImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                      <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <p className="absolute bottom-6 left-6 text-white text-lg font-medium">{img.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Parallax Divider */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase">Parallax Image Divider</h3>
            <p className="text-muted-foreground">Full-width visual break with fixed background.</p>
          </div>
          <div 
            className="relative h-[300px] md:h-[350px] bg-fixed bg-cover bg-center rounded-2xl overflow-hidden"
            style={{ backgroundImage: `url(${campingByRiver})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className="text-center">
                <h4 className="text-2xl md:text-4xl text-white font-bold uppercase tracking-wide mb-4">
                  Adventure Awaits
                </h4>
                <p className="text-white/90 max-w-xl mx-auto">A powerful statement that resonates with your audience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 7. DATA DISPLAY */}
        {/* ============================================ */}
        <section id="data-display" className="pt-12">
          <SectionHeader 
            category="Data Display" 
            title="Stats, Timeline & Comparison" 
            description="Visualizing information and progress"
          />

          {/* Animated Stats */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Animated Stats Counter</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-muted/30 rounded-2xl border border-border"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Process Steps Timeline</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex-1 relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-border" />
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-foreground uppercase tracking-wide mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground max-w-[200px]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Comparison Cards</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border-2 border-muted-foreground/30 bg-muted/50"
              >
                <h4 className="text-xl font-semibold uppercase text-foreground mb-6 flex items-center gap-2">
                  <X className="w-6 h-6 text-destructive" />
                  Without Tax Queen
                </h4>
                <ul className="space-y-4">
                  {comparisonData.without.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border-2 border-primary bg-primary/5"
              >
                <h4 className="text-xl font-semibold uppercase text-primary mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6" />
                  With Tax Queen
                </h4>
                <ul className="space-y-4">
                  {comparisonData.with.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase">Testimonial Carousel</h3>
            <Carousel opts={{ loop: true }} className="max-w-2xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center text-center p-8">
                      <img src={heatherPortrait} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-primary/20" />
                      <blockquote className="text-xl italic text-foreground leading-relaxed max-w-xl mb-6">
                        "{testimonial.text}"
                      </blockquote>
                      <cite className="not-italic">
                        <span className="font-semibold text-foreground">{testimonial.name}</span>
                        <span className="text-muted-foreground"> — {testimonial.role}</span>
                      </cite>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* ============================================ */}
        {/* 8. PAGE PATTERNS */}
        {/* ============================================ */}
        <section id="page-patterns">
          <SectionHeader 
            category="Page Patterns" 
            title="Hero, Headers & CTAs" 
            description="Standard page-level patterns for consistency"
          />

          {/* Hero Pattern */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Hero Section Pattern</h3>
            <div className="p-6 bg-muted/30 rounded-2xl border border-border space-y-4">
              <p className="text-sm text-muted-foreground">Standard hero layout: 2-column grid, image left, content right</p>
              <pre className="text-xs bg-foreground/5 p-4 rounded-lg overflow-x-auto text-foreground">
{`<section className="pt-28 pb-16 md:pt-32 md:pb-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img ... />
      </div>
      {/* Content */}
      <div className="space-y-6">
        <p className="text-primary font-medium uppercase tracking-widest text-sm">
          Eyebrow Label
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase">
          Page Title
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Description text...
        </p>
        <Button variant="cta" className="rounded-full">
          Get Started
        </Button>
      </div>
    </div>
  </div>
</section>`}
              </pre>
            </div>
          </div>

          {/* Section Header Pattern */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase">Section Header Pattern</h3>
            <div className="p-6 bg-muted/30 rounded-2xl border border-border space-y-4">
              <div className="text-center mb-8">
                <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Eyebrow Text</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase mb-4">Section Title</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Optional description text explaining the section.</p>
              </div>
              <pre className="text-xs bg-foreground/5 p-4 rounded-lg overflow-x-auto text-foreground">
{`<div className="text-center mb-12">
  <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
    Eyebrow
  </p>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase mb-4">
    Section Title
  </h2>
  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
    Description...
  </p>
</div>`}
              </pre>
            </div>
          </div>

          {/* CTA Section Pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase">CTA Section Pattern</h3>
            <div className="py-16 text-center space-y-6 bg-muted/30 rounded-2xl border border-border">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                A closing call-to-action that encourages the visitor to take the next step.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="cta" size="lg" className="rounded-full">Get Started</Button>
                <Button variant="outline" size="lg" className="rounded-full">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DesignGuide;
