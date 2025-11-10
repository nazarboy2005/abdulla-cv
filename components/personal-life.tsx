"use client"

import { Heart, MapPin, Sun, Target, Activity, Waves, Camera } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function PersonalLife() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="personal-life" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 transition-smooth">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Personal <span className="text-primary">Life</span>
        </h2>

        {/* Childhood Section */}
        <div className="mb-16">
          <div
            className={`transition-smooth duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Childhood & Growing Up</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Where I Grew Up
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I grew up in Qatar, a beautiful country in the Middle East. The rich culture, warm community, and
                    vibrant traditions shaped who I am today. Growing up in Qatar provided me with a unique perspective
                    on both traditional values and modern opportunities.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-primary" />
                    Environment & Culture
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The environment I grew up in was filled with family values, respect for traditions, and a strong
                    sense of community. From wearing the traditional thob as a child to participating in cultural
                    activities, these experiences instilled in me a deep appreciation for my heritage and the importance
                    of staying connected to my roots.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    Childhood Interests
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    As a child, I was always curious and active. I loved exploring the outdoors, spending time with
                    family, and learning about the world around me. These early interests in exploration and discovery
                    laid the foundation for my passion for learning and continuous growth.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                  <img
                    src="/images/childhoodimage.png"
                    alt="Childhood photo wearing traditional thob"
                    className="relative w-full h-auto object-cover rounded-2xl shadow-xl ring-4 ring-background hover:shadow-primary/40 transition-smooth duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Sports Section */}
        <div>
          <div
            className={`transition-smooth duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Hobbies & Sports</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Football Section */}
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h4 className="text-2xl font-bold">Football</h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Football is my best sport and one of my greatest passions. I played football throughout high school,
                  where I developed not just my skills on the field, but also learned valuable lessons about teamwork,
                  discipline, and perseverance. The sport taught me the importance of dedication and working together
                  toward a common goal.
                </p>
                <div className="mt-4">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                    <img
                      src="/meinfootball.png"
                      alt="Playing football in high school"
                      className="relative w-full h-full object-cover hover:scale-105 transition-smooth duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Horse Riding Section */}
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                  <h4 className="text-2xl font-bold">Horse Riding</h4>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Riding horses at our farm is one of my favorite hobbies. It's a peaceful and exhilarating experience
                  that connects me with nature and tradition. Horse riding has taught me patience, respect for animals,
                  and the importance of building trust and understanding.
                </p>
                <div className="mt-4">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                    <img
                      src="/myimageinahorseasachild.png"
                      alt="Riding horses at the farm"
                      className="relative w-full h-full object-cover hover:scale-105 transition-smooth duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Beach Trips */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-bold">Beach Trips</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every Friday during the summer, I love going to the beach. It's a cherished tradition that allows me to
                relax, spend quality time with family and friends, and enjoy the beautiful Qatari coastline. These
                regular beach trips are a perfect way to unwind and recharge after a busy week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

