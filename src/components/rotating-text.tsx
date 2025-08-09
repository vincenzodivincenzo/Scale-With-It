"use client"

import { useState, useEffect } from "react"

const rotatingWords = [
  "It",
  "Automations", 
  "AI",
  "Efficiency",
  "Innovation",
  "Success"
]

export function RotatingText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => 
          prevIndex === rotatingWords.length - 1 ? 0 : prevIndex + 1
        )
        setIsVisible(true)
        setIsAnimating(false)
      }, 400) // Transition duration
      
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-block relative">
      <span className="text-gray-900">Scale With{" "}</span>
      <span 
        className={`inline-block relative transition-all duration-500 ease-in-out min-w-[220px] text-left ${
          isVisible 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-4 scale-95'
        }`}
        style={{
          backgroundImage: currentWordIndex === 0 
            ? 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)'
            : 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: currentWordIndex !== 0 ? 'gradientShift 2s ease-in-out infinite' : 'none'
        }}
      >
        {rotatingWords[currentWordIndex]}
        {isAnimating && (
          <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
      </span>
    </div>
  )
}
