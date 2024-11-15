import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Calendar } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Hi User!</h1>
        <div className="max-w-4xl mx-auto w-full">
          <Card className="w-full shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Left Column */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-md">
                  <img
                    src="/api/placeholder/200/200"
                    alt="Therapist profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
                  Your Support Person
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-4">
                  Dr. Jane Smith
                </p>
              </div>

              {/* Right Column */}
              <CardContent className="flex flex-col justify-center p-4">
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="flex-1 flex items-center justify-center gap-2 py-6">
                    <PhoneCall className="w-5 h-5" />
                    Hop on a call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 flex items-center justify-center gap-2 py-6"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule meeting
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-4">
                    Didn't suit you? You may find these helpful:
                  </p>
                  <ul className="space-y-3 text-left max-w-md mx-auto">
                    <li className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                      <span className="text-gray-700">Meditation exercises</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                      <span className="text-gray-700">Stress management techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                      <span className="text-gray-700">Self-help resources</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}