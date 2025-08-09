import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Bot, Zap, Target, Users, TrendingUp, CheckCircle } from "lucide-react"
import { RotatingText } from "@/components/rotating-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { ROICalculator } from "@/components/roi-calculator"
import { InteractiveDemo } from "@/components/interactive-demo"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-xl font-bold text-gray-900">ScaleWith</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium">Servizi</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium">Vantaggi</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Clienti</a>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800">
              Richiedi Consulenza
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-6">
              Automazione AI per Agenzie
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <RotatingText />
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Riduci i costi operativi del 70% e aumenta la produttività dei tuoi team. 
              Automatizziamo i processi ripetitivi della tua agenzia con soluzioni AI personalizzate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Ottieni la tua Automazione
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Scopri i Casi Studio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Servizi di Automazione
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluzioni AI specifiche per ogni area della tua agenzia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-gray-900" />
                </div>
                <CardTitle>Chatbot Cliente Intelligenti</CardTitle>
                <CardDescription>
                  Gestione automatica delle richieste clienti con AI conversazionale avanzata
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Risposta 24/7 ai clienti
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Qualificazione automatica lead
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integrazione CRM esistente
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-gray-900" />
                </div>
                <CardTitle>Automazione Marketing</CardTitle>
                <CardDescription>
                  Creazione e gestione automatica di campagne marketing personalizzate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Generazione contenuti AI
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Segmentazione automatica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ottimizzazione performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-gray-900" />
                </div>
                <CardTitle>Analytics Predittivi</CardTitle>
                <CardDescription>
                  Analisi intelligente dei dati per decisioni strategiche basate sull&apos;AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Previsioni performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Report automatici
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Identificazione opportunità
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-gray-900" />
                </div>
                <CardTitle>Gestione Progetti AI</CardTitle>
                <CardDescription>
                  Automazione completa del workflow di gestione progetti e risorse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Planning automatico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Allocazione risorse smart
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoraggio real-time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-gray-900" />
                </div>
                <CardTitle>Automazioni Custom</CardTitle>
                <CardDescription>
                  Soluzioni AI personalizzate per processi specifici della tua agenzia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sviluppo su misura
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Integrazione API esistenti
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Supporto continuo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perché Scegliere ScaleWith
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Risultati concreti e misurabili per la tua agenzia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={70} suffix="%" />
              <div className="text-sm text-gray-600">Riduzione Costi Operativi</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={3} suffix="x" />
              <div className="text-sm text-gray-600">Aumento Produttività</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Operatività Continua</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={30} suffix=" giorni" />
              <div className="text-sm text-gray-600">Implementazione</div>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Setup Rapido</h3>
              <p className="text-gray-600">
                Implementazione in 30 giorni senza interruzioni operative. 
                I nostri esperti gestiscono tutto il processo.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Garantito</h3>
              <p className="text-gray-600">
                Investimento che si ripaga in 6 mesi. Monitoriamo costantemente 
                le performance per massimizzare il ritorno.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Supporto Continuo</h3>
              <p className="text-gray-600">
                Team dedicato sempre disponibile. Aggiornamenti costanti 
                e ottimizzazioni per restare all&apos;avanguardia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Interactive Demo */}
      <InteractiveDemo />

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-gray-900" />
              <span className="ml-2 text-lg font-bold text-gray-900">ScaleWith</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Termini</a>
              <a href="mailto:info@scalewith.it" className="text-gray-600 hover:text-gray-900">Contatti</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 ScaleWith. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}