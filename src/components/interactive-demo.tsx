"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, User, Zap, Play, Pause } from "lucide-react"

const demoMessages = [
  { type: "user", text: "Ciao, vorrei informazioni sui vostri servizi di marketing", time: "14:32" },
  { type: "bot", text: "Ciao! Sono l'assistente AI di ScaleWith. Sarò felice di aiutarti! Per quale tipo di agenzia stai cercando soluzioni di automazione?", time: "14:32" },
  { type: "user", text: "Abbiamo un'agenzia di marketing digitale con 15 dipendenti", time: "14:33" },
  { type: "bot", text: "Perfetto! Per un'agenzia della vostra dimensione, possiamo automatizzare fino al 70% dei processi ripetitivi. Ti interesserebbe una demo delle nostre automazioni per lead generation?", time: "14:33" },
  { type: "user", text: "Sì, molto interessante!", time: "14:34" },
  { type: "bot", text: "Ottimo! Ho già prenotato per te una consulenza gratuita di 30 minuti con il nostro esperto Marco. Riceverai il link Zoom via email tra 5 minuti. Posso rispondere ad altre domande nel frattempo?", time: "14:34" }
]

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [visibleMessages, setVisibleMessages] = useState<typeof demoMessages>([])

  useEffect(() => {
    if (isPlaying && currentStep < demoMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, demoMessages[currentStep]])
        setCurrentStep(prev => prev + 1)
      }, 2000)

      return () => clearTimeout(timer)
    } else if (currentStep >= demoMessages.length) {
      setIsPlaying(false)
    }
  }, [isPlaying, currentStep])

  const startDemo = () => {
    setVisibleMessages([])
    setCurrentStep(0)
    setIsPlaying(true)
  }

  const pauseDemo = () => {
    setIsPlaying(false)
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Bot className="w-4 h-4 mr-2" />
            Demo Live
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vedi l&apos;AI in Azione
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ecco come il nostro chatbot AI gestisce automaticamente i lead della tua agenzia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Chat Interface */}
          <Card className="border-gray-200 bg-white shadow-lg">
            <CardHeader className="bg-gray-900 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">AI Assistant ScaleWith</CardTitle>
                    <CardDescription className="text-gray-300">Online ora</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={isPlaying ? pauseDemo : startDemo}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? "Pausa" : "Play Demo"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {visibleMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-500`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-gray-100 text-gray-900 border border-gray-200'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <Bot className="w-4 h-4 mt-0.5 text-gray-600" />
                        )}
                        {message.type === 'user' && (
                          <User className="w-4 h-4 mt-0.5 text-gray-300" />
                        )}
                        <div>
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isPlaying && currentStep < demoMessages.length && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-gray-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Scrivi un messaggio..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    disabled
                  />
                  <Button size="sm" className="bg-gray-900 hover:bg-gray-800" disabled>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Benefits */}
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Qualificazione Automatica</h3>
                    <p className="text-gray-600 text-sm">
                      L&apos;AI identifica automaticamente il tipo di agenzia, dimensioni e necessità, 
                      qualificando i lead in tempo reale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Risposta Intelligente</h3>
                    <p className="text-gray-600 text-sm">
                      Risposte personalizzate basate sul profilo del cliente e sui servizi 
                      più adatti alle loro esigenze specifiche.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Booking Automatico</h3>
                    <p className="text-gray-600 text-sm">
                      Integrazione diretta con il calendario per prenotazioni automatiche 
                      e follow-up personalizzati.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 text-white">
              <h3 className="font-bold mb-2">Risultati Reali</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">87%</div>
                  <div className="text-sm text-gray-300">Lead Qualificati</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">45s</div>
                  <div className="text-sm text-gray-300">Tempo Medio Risposta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
