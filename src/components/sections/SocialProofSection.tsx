import { Users, MapPin, Clock, Star } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "motion/react";

const stats = [
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Nomads Served",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "",
    label: "States Covered",
  },
  {
    icon: Clock,
    value: 24,
    suffix: " hrs",
    label: "Response Time",
  },
  {
    icon: Star,
    value: 5,
    suffix: " Star",
    label: "Client Rating",
  },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-primary text-primary-foreground px-5 py-4 rounded-xl shadow-lift flex items-center gap-3 flex-shrink-0"
  >
    <stat.icon className="w-5 h-5 md:w-6 md:h-6 opacity-90" />
    <div className="flex flex-col">
      <AnimatedCounter 
        end={stat.value} 
        suffix={stat.suffix}
        className="text-xl md:text-2xl font-bold"
      />
      <span className="text-xs md:text-sm font-medium text-primary-foreground/90 whitespace-nowrap">{stat.label}</span>
    </div>
  </motion.div>
);

// Non-animated version for the marquee
const StatCardStatic = ({ stat }: { stat: typeof stats[0] }) => (
  <div className="bg-primary text-primary-foreground px-5 py-4 rounded-xl shadow-lift flex items-center gap-3 flex-shrink-0">
    <stat.icon className="w-5 h-5 opacity-90" />
    <div className="flex flex-col">
      <span className="text-xl font-bold">
        {stat.value}{stat.suffix}
      </span>
      <span className="text-xs font-medium text-primary-foreground/90 whitespace-nowrap">{stat.label}</span>
    </div>
  </div>
);

const SocialProofSection = () => {
  return (
    <section className="relative z-20 -mt-48 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Mobile: Auto-scrolling marquee */}
        <div className="md:hidden overflow-hidden -mx-4">
          <div className="flex gap-4 animate-scroll-mobile" style={{ width: 'max-content' }}>
            {/* Duplicate items for seamless loop */}
            {[...stats, ...stats].map((stat, index) => (
              <StatCardStatic key={index} stat={stat} />
            ))}
          </div>
        </div>
        
        {/* Desktop: Flex wrap */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;