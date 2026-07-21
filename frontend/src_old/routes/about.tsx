import { createFileRoute } from "@tanstack/react-router";
import { Crown, Award, Users, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — King Perfumes" },
      { name: "description", content: "Discover the story behind King Perfumes — India's luxury fragrance destination." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <Reveal className="text-center">
        <Crown className="mx-auto h-8 w-8 text-gold animate-float" />
        <h1 className="mt-4 font-serif text-5xl md:text-6xl text-primary">Our Royal Legacy</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          King Perfumes was born from a passion for the world's finest fragrances. We curate and craft scents that 
          capture the essence of luxury, elegance, and sophistication.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          { icon: Award, title: "Premium Quality", text: "We source only the finest ingredients from renowned fragrance houses across the globe." },
          { icon: Users, title: "Expert Curators", text: "Our team of fragrance experts handpicks each scent for its quality and character." },
          { icon: Globe, title: "Global Selection", text: "From French perfumeries to Indian attar makers, we bring the world to you." },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="group hover-lift text-center p-6 rounded-2xl bg-card border border-border/40 transition-colors hover:border-gold/30">
              <item.icon className="mx-auto h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mt-4 font-serif text-xl text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}