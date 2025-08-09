"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Mail, Building, Target } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  employees: string
  services: string[]
  budget: string
  timeline: string
  message: string
}

const serviceOptions = [
  "Chatbot AI",
  "Automazione Marketing",
  "Analytics Predittivi",
  "Gestione Progetti AI",
  "Automazioni Custom"
]

const budgetRanges = [
  "€10.000 - €25.000",
  "€25.000 - €50.000",
  "€50.000 - €100.000",
  "€100.000+"
]

const timelineOptions = [
  "Il prima possibile",
  "Entro 1 mese",
  "Entro 3 mesi",
  "Entro 6 mesi"
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    services: [],
    budget: "",
    timeline: "",
    message: ""
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = () => {
    setIsSubmitted(true)
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
  }

  if (isSubmitted) {
    return (
      <div className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Grazie per la Richiesta!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Il nostro team ti contatterà entro 24 ore per programmare la tua consulenza gratuita personalizzata.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold">Prossimi Passi</p>
                <p className="text-sm text-gray-600">Consulenza strategica gratuita</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold">Analisi Personalizzata</p>
                <p className="text-sm text-gray-600">Identifichiamo le tue opportunità</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4 text-center">
                <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold">Piano Implementazione</p>
                <p className="text-sm text-gray-600">Roadmap dettagliata per la tua agenzia</p>
              </CardContent>
            </Card>
          </div>
          <Button 
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData({
                name: "", email: "", phone: "", company: "", employees: "",
                services: [], budget: "", timeline: "", message: ""
              })
            }}
            variant="outline"
          >
            Invia Nuova Richiesta
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Consulenza Gratuita
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Inizia la Tua Trasformazione
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Raccontaci della tua agenzia e ricevi una strategia di automazione personalizzata
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 ml-2 ${
                    step < currentStep ? 'bg-gray-900' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Info Base</span>
            <span>Servizi</span>
            <span>Budget</span>
            <span>Messaggio</span>
          </div>
        </div>

        <Card className="border-gray-200">
          <CardContent className="p-8">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informazioni di Contatto</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="Mario Rossi"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="mario@agenzia.it"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="+39 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Agenzia *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="La Tua Agenzia S.r.l."
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numero di Dipendenti
                  </label>
                  <select
                    value={formData.employees}
                    onChange={(e) => updateFormData("employees", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Seleziona...</option>
                    <option value="1-5">1-5 dipendenti</option>
                    <option value="6-15">6-15 dipendenti</option>
                    <option value="16-30">16-30 dipendenti</option>
                    <option value="31-50">31-50 dipendenti</option>
                    <option value="50+">50+ dipendenti</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Services */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Servizi di Interesse</h3>
                <p className="text-gray-600 mb-6">Seleziona tutti i servizi che potrebbero interessarti:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <div
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.services.includes(service)
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          formData.services.includes(service)
                            ? 'border-gray-900 bg-gray-900'
                            : 'border-gray-300'
                        }`}>
                          {formData.services.includes(service) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="font-medium text-gray-900">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget e Tempistiche</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Budget Indicativo per l&apos;Automazione
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {budgetRanges.map((range) => (
                      <div
                        key={range}
                        onClick={() => updateFormData("budget", range)}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-center ${
                          formData.budget === range
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {range}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quando Vorresti Iniziare?
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {timelineOptions.map((timeline) => (
                      <div
                        key={timeline}
                        onClick={() => updateFormData("timeline", timeline)}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-center ${
                          formData.timeline === timeline
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {timeline}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Message */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Raccontaci di Più</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrivi le Sfide della Tua Agenzia
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Raccontaci quali processi richiedono più tempo, dove vedi le maggiori inefficienze, o qualsiasi altra informazione che possa aiutarci a creare una soluzione su misura per te..."
                  />
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Riepilogo della Richiesta:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Agenzia:</strong> {formData.company || "Non specificato"}</p>
                    <p><strong>Dipendenti:</strong> {formData.employees || "Non specificato"}</p>
                    <p><strong>Servizi:</strong> {formData.services.length > 0 ? formData.services.join(", ") : "Nessuno selezionato"}</p>
                    <p><strong>Budget:</strong> {formData.budget || "Non specificato"}</p>
                    <p><strong>Timeline:</strong> {formData.timeline || "Non specificato"}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="min-w-[100px]"
              >
                Indietro
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && (!formData.name || !formData.email || !formData.company)) ||
                    (currentStep === 2 && formData.services.length === 0)
                  }
                  className="bg-gray-900 hover:bg-gray-800 min-w-[100px]"
                >
                  Avanti
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gray-900 hover:bg-gray-800 min-w-[150px]"
                >
                  Invia Richiesta
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
