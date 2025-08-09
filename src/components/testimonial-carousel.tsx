"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Play, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "CEO",
    company: "Digital Agency Milano",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "L'automazione AI di ScaleWith ha trasformato la nostra gestione clienti. Risparmiamo 20 ore settimanali solo sui task ripetitivi.",
    results: {
      timeSaved: "20 ore/settimana",
      costReduction: "65%",
      satisfaction: "98%"
    },
    videoUrl: "#"
  },
  {
    id: 2,
    name: "Laura Bianchi",
    role: "Founder",
    company: "Creative Hub Roma",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "ROI del 300% in 8 mesi. Le automazioni hanno rivoluzionato il nostro workflow e la soddisfazione cliente è alle stelle.",
    results: {
      roi: "300%",
      timeToROI: "8 mesi",
      efficiency: "+170%"
    },
    videoUrl: "#"
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    role: "CTO",
    company: "Tech Solutions Torino",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "Implementazione velocissima e risultati immediati. Il team di ScaleWith ci ha guidato in ogni fase del processo.",
    results: {
      implementation: "15 giorni",
      productivity: "+250%",
      errors: "-90%"
    },
    videoUrl: "#"
  },
  {
    id: 4,
    name: "Sofia Romano",
    role: "Marketing Director",
    company: "Innovate Agency Napoli",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "I nostri clienti sono piu soddisfatti che mai. L AI gestisce il 80% delle richieste iniziali permettendoci di concentrarci sulla strategia.",
    results: {
      automation: "80%",
      clientSatisfaction: "+45%",
      strategicTime: "+30h/settimana"
    },
    videoUrl: "#"
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Risultati reali da agenzie che hanno già trasformato il loro business
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <Card className="border-gray-700 bg-white/5 backdrop-blur-sm text-white mb-8">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Testimonial Content */}
                <div>
                  <Quote className="w-12 h-12 text-gray-400 mb-4" />
                  <blockquote className="text-xl text-gray-100 mb-6 leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                    />
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <div className="font-semibold text-white">{currentTestimonial.name}</div>
                      <div className="text-gray-300 text-sm">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Video
                    </Button>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(currentTestimonial.results).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Navigation */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`border-gray-700 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                  index === currentIndex % 3 ? 'ring-2 ring-white/30' : 'hover:bg-white/10'
                }`}
                onClick={() => goToSlide(index)}
              >
                <CardHeader className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-white text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs mt-2 line-clamp-2">
                    {testimonial.quote}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
