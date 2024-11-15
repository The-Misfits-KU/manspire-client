import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const therapists = [
  {
    name: "Dr. Emily Johnson",
    profession: "Clinical Psychologist",
    intro: "Specializing in anxiety and depression with 10 years of experience.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Lee, LMFT",
    profession: "Marriage and Family Therapist",
    intro: "Helping couples and families improve their relationships for over 15 years.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Dr. Sarah Patel",
    profession: "Psychiatrist",
    intro: "Specializing in mood disorders and medication management with a holistic approach.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Dr. James Wilson",
    profession: "Cognitive Behavioral Therapist",
    intro: "Expert in CBT with a focus on stress management and personal growth.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function TherapyHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Hi user!</h1>
      <p className="text-xl mb-6">Feeling a bit down?</p>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <Link href="/emergency-call" passHref>
          <Button variant="outline" className="w-full sm:w-auto">
            Emergency Call
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="/find-therapist" className="text-lg font-medium hover:underline">
          Find a Therapist
        </Link>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {therapists.map((therapist, index) => (
            <Card key={index} className="w-[300px] flex-none">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="rounded-full w-16 h-16 object-cover flex-shrink-0"
                  />
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-bold">{therapist.name}</h3>
                    <p className="text-sm text-muted-foreground">{therapist.profession}</p>
                    <p className="text-sm">{therapist.intro}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Connect</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}