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
    <section id="personal-life" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 transition-smooth relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Personal Life
          </span>
        </h2>

        {/* Childhood Section */}
        <div className="mb-16">
          <div
            className={`transition-smooth duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 shadow-lg shadow-pink-500/50">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Childhood & Growing Up
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Where I Grew Up
                    </span>
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    I grew up in Qatar, a beautiful country in the Middle East. The rich culture, warm community, and
                    vibrant traditions shaped who I am today. Growing up in Qatar provided me with a unique perspective
                    on both traditional values and modern opportunities.
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
                      <Sun className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      Environment & Culture
                    </span>
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    The environment I grew up in was filled with family values, respect for traditions, and a strong
                    sense of community. From wearing the traditional thob as a child to participating in cultural
                    activities, these experiences instilled in me a deep appreciation for my heritage and the importance
                    of staying connected to my roots.
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Childhood Interests
                    </span>
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    As a child, I was always curious and active. I loved exploring the outdoors, spending time with
                    family, and learning about the world around me. These early interests in exploration and discovery
                    laid the foundation for my passion for learning and continuous growth.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/30 via-rose-400/30 to-orange-400/30 blur-xl" />
                    <img
                      src="/images/childhoodimage.png"
                      alt="Childhood photo wearing traditional thob"
                      className="relative w-full h-auto object-cover rounded-2xl shadow-2xl ring-4 ring-white dark:ring-slate-900 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
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
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-cyan-500/50">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hobbies & Sports
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Football Section */}
              <div className="group p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Football
                  </h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  Football is my best sport and one of my greatest passions. I played football throughout high school,
                  where I developed not just my skills on the field, but also learned valuable lessons about teamwork,
                  discipline, and perseverance. The sport taught me the importance of dedication and working together
                  toward a common goal.
                </p>
                <div className="mt-4">
                  <div className="relative w-full h-64 rounded-xl overflow-hidden group/image">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl blur opacity-60 group-hover/image:opacity-80 transition-opacity duration-300" />
                    <div className="relative w-full h-full">
                      <img
                        src="/meinfootball.png"
                        alt="Playing football in high school"
                        className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Horse Riding Section */}
              <div className="group p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30 rounded-2xl border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Horse Riding
                  </h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  Riding horses at our farm is one of my favorite hobbies. It's a peaceful and exhilarating experience
                  that connects me with nature and tradition. Horse riding has taught me patience, respect for animals,
                  and the importance of building trust and understanding.
                </p>
                <div className="mt-4">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden group/image">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-xl blur opacity-60 group-hover/image:opacity-80 transition-opacity duration-300" />
                    <div className="relative w-full h-full">
                      <img
                        src="/myimageinahorseasachild.png"
                        alt="Riding horses at the farm"
                        className="w-full h-full object-contain object-top group-hover/image:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beach Trips */}
            <div className="group p-8 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 animate-pulse" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                    <Waves className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white drop-shadow-lg">Beach Trips</h4>
                </div>
                <p className="text-white/95 leading-relaxed text-lg drop-shadow-md">
                  Every Friday during the summer, I love going to the beach. It's a cherished tradition that allows me to
                  relax, spend quality time with family and friends, and enjoy the beautiful Qatari coastline. These
                  regular beach trips are a perfect way to unwind and recharge after a busy week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

