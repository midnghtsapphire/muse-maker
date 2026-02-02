import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isCreatePage = location.pathname === "/create";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
            <Music2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Amper</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          {isCreatePage ? (
            <Link to="/">
              <Button variant="heroOutline" size="sm">
                Back to Home
              </Button>
            </Link>
          ) : (
            <Link to="/create">
              <Button variant="hero" size="sm">
                Start Creating
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
};
