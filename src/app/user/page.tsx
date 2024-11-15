'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-2xl mx-auto shadow-md">
        <CardContent className="p-6">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Hi, Mr. Professional,</h1>
            <p className="text-gray-600 mb-4">You helped 3 people today.</p>
            
            {/* Immediate Attention Section */}
            <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-gray-800">Somebody needs immediate attention.</p>
              <Button 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                onClick={() => console.log('Emergency call clicked')}
              >
                <Phone size={16} />
                Hop on a call
              </Button>
            </div>
          </div>

          {/* Schedule Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Schedule</h2>
            <div className="grid gap-4">
              {/* Today's Appointment */}
              <Card className="bg-white">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">random_user</p>
                    <p className="text-gray-600">8PM, today</p>
                  </div>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => console.log('8PM call clicked')}
                  >
                    <Phone size={16} />
                    Hop on a call
                  </Button>
                </CardContent>
              </Card>

              {/* Monday's Appointment */}
              <Card className="bg-white">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">old_user</p>
                    <p className="text-gray-600">6PM, monday</p>
                  </div>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => console.log('Monday call clicked')}
                  >
                    <Phone size={16} />
                    Hop on a call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}