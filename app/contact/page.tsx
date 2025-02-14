"use client"

import Header from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export default function ContactPage() {
  const { toast } = useToast()
  const [progress, setProgress] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setProgress(0)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          toast({
            title: "Message Sent!",
            description: "We'll get back to you soon.",
          })
          return 100
        }
        return prev + 10
      })
    }, 100)
  }

  return (
    <div>
      <Header />
      <main className="p-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-pink">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border-2 border-pink rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border-2 border-pink rounded"
                rows={4}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
              {progress > 0 && <Progress value={progress} className="mt-4" />}
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
} 