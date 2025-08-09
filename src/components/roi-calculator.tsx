"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react"

export function ROICalculator() {
  const [employees, setEmployees] = useState(10)
  const [hourlyRate, setHourlyRate] = useState(25)
  const [hoursPerWeek, setHoursPerWeek] = useState(20)
  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    const weeklyWaste = employees * hoursPerWeek * hourlyRate
    const monthlyWaste = weeklyWaste * 4
    const yearlyWaste = monthlyWaste * 12
    const automationSavings = yearlyWaste * 0.7 // 70% reduction
    const implementationCost = 15000 // Base cost
    const monthsToROI = implementationCost / (automationSavings / 12)

    return {
      weeklyWaste,
      monthlyWaste,
      yearlyWaste,
      automationSavings,
      monthsToROI: Math.ceil(monthsToROI)
    }
  }

  const results = calculateROI()

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Calcolatore ROI
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calcola il Tuo Risparmio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri quanto potresti risparmiare automatizzando i processi della tua agenzia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Input */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>I Tuoi Dati</CardTitle>
              <CardDescription>
                Inserisci le informazioni della tua agenzia per un calcolo personalizzato
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numero di dipendenti
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5</span>
                  <span className="font-semibold text-gray-900">{employees} dipendenti</span>
                  <span>100+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Costo orario medio (€)
                </label>
                <input
                  type="range"
                  min="15"
                  max="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>€15</span>
                  <span className="font-semibold text-gray-900">€{hourlyRate}/ora</span>
                  <span>€50+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ore settimanali di task ripetitivi
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5h</span>
                  <span className="font-semibold text-gray-900">{hoursPerWeek}h/settimana</span>
                  <span>40h+</span>
                </div>
              </div>

              <Button 
                onClick={() => setShowResults(true)}
                className="w-full bg-gray-900 hover:bg-gray-800"
              >
                Calcola il Risparmio
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className={`transition-all duration-500 ${showResults ? 'opacity-100' : 'opacity-50'}`}>
            <div className="grid gap-4 mb-6">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-red-600">Spreco Annuale Attuale</p>
                      <p className="text-2xl font-bold text-red-700">€{results.yearlyWaste.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Risparmio con Automazione</p>
                      <p className="text-2xl font-bold text-green-700">€{results.automationSavings.toLocaleString()}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600">ROI in</p>
                      <p className="text-2xl font-bold text-blue-700">{results.monthsToROI} mesi</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-gray-900 bg-gray-900 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Pronto a Iniziare?</h3>
                <p className="text-gray-300 mb-4">
                  Richiedi una consulenza gratuita per scoprire come automatizzare la tua agenzia
                </p>
                <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  Prenota Consulenza Gratuita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
