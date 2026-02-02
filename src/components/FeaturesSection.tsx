import { motion } from "framer-motion";
import { Wand2, Sliders, Layers, FolderOpen, Users, Download } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Generation",
    description: "Describe your vision in words and watch as AI creates unique, royalty-free tracks in any genre.",
  },
  {
    icon: Sliders,
    title: "Creative Controls",
    description: "Fine-tune tempo, key, instrumentation, and arrangement to match your exact needs.",
  },
  {
    icon: Layers,
    title: "Stem Exports",
    description: "Download individual tracks for complete control in your DAW. Mix and remix to perfection.",
  },
  {
    icon: FolderOpen,
    title: "Project Library",
    description: "Access pre-built templates and save your creations for quick access and iteration.",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Work together in real-time with other creators on shared music projects.",
  },
  {
    icon: Download,
    title: "Instant Downloads",
    description: "Export high-resolution WAV or MP3 files instantly. No waiting, no limits.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="gradient-text"> Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional music creation tools powered by cutting-edge AI technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
