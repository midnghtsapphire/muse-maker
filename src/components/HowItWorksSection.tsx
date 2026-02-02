import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Describe Your Vision",
    description: "Tell Amper what you're looking for — a genre, mood, tempo, or even a reference track.",
  },
  {
    number: "02",
    title: "AI Generates Options",
    description: "Our AI creates multiple unique variations in seconds, each fully customizable.",
  },
  {
    number: "03",
    title: "Fine-Tune & Perfect",
    description: "Use creative controls to adjust every element until it's exactly right.",
  },
  {
    number: "04",
    title: "Export & Use Anywhere",
    description: "Download your royalty-free track in any format. It's yours to use forever.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to finished track in four simple steps.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent mx-auto mt-4" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
