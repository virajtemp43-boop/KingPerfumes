import { createFileRoute } from "@tanstack/react-router";
import { Crown, Award, Users, Globe, Leaf, Star, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

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
    <div className="bg-background text-foreground selection:bg-gold selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="About King Perfumes" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 mt-16 text-white drop-shadow-md">
          <Reveal variant="fadeUp">
            <Crown className="mx-auto h-12 w-12 text-gold animate-float mb-6" />
            <span className="text-sm tracking-[0.3em] uppercase text-gold/90 font-medium">Our Story</span>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl">The Royal Legacy</h1>
            <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting memories through the world's most exquisite and rare botanical ingredients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <Reveal variant="fadeUp">
          <h2 className="font-serif text-4xl text-primary mb-8">Our Philosophy</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            King Perfumes was born from a singular passion: to democratize absolute luxury. We believe that a signature scent is more than just a fragrance—it is an invisible garment, a silent introduction, and a lasting memory. By partnering directly with masterful perfumers in Grasse, France and traditional attar makers in Kannauj, India, we bridge the gap between ancient heritage and modern elegance.
          </p>
        </Reveal>
      </section>

      {/* Pillar Grid */}
      <section className="max-w-[1320px] mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "Master Craftsmanship", text: "Every bottle is meticulously blended, aged, and bottled to perfection by our artisan perfumers." },
            { icon: Leaf, title: "Pure Botanicals", text: "We source 100% natural, cruelty-free, and sustainably harvested ingredients for all our signature lines." },
            { icon: Globe, title: "Global Heritage", text: "A unique fusion of deep oriental traditions and crisp, contemporary occidental scent profiles." },
            { icon: Users, title: "Client First", text: "An unyielding commitment to luxury service, from personalized scent consultations to elegant unboxing." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} variant="fadeUp">
              <div className="group relative h-full text-center p-8 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/5 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Sparkles className="w-16 h-16 text-gold" />
                </div>
                <div className="inline-flex p-4 rounded-full bg-secondary/50 mb-6 transition-colors group-hover:bg-gold/10">
                  <item.icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-[1320px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <Reveal variant="fadeRight" className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img src="/images/about-founder.jpg" alt="Master Perfumer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
          </Reveal>
          <Reveal variant="fadeLeft" className="w-full md:w-1/2">
            <Star className="w-8 h-8 text-gold mb-6" />
            <h2 className="font-serif text-4xl text-primary mb-6">A Letter From the Founder</h2>
            <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-6 mb-8">
              "When I started King Perfumes, I wanted to create more than just scents. I wanted to bottle emotions, memories, and the raw, untamed beauty of nature. Every fragrance we release is a piece of my soul, crafted for those who refuse to compromise on quality."
            </blockquote>
            <p className="text-sm uppercase tracking-widest font-medium text-primary">— Founder & Master Nose</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}