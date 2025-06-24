"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Copy, Download, Sparkles } from "lucide-react"
import { useSession, signIn } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

export function HeroSection() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState<"humanize" | "detect" | "generate">("humanize")
  const { data: session } = useSession()
  const { toast } = useToast()

  const handleProcess = async () => {
    if (!session) {
      signIn()
      return
    }

    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to process.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const response = await fetch("/api/ai/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          action: activeTab,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to process text")
      }

      const data = await response.json()
      setOutputText(data.result)

      toast({
        title: "Success",
        description: `Text ${activeTab}d successfully!`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process text. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    toast({
      title: "Copied",
      description: "Text copied to clipboard!",
    })
  }

  return (
    <section className="gradient-bg hero-pattern py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            <Sparkles className="w-4 h-4 mr-1" />
            AI-Powered Writing Assistant
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Humanize AI Text &<br />
            <span className="text-primary">Outsmart AI Detectors</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform AI-generated content into human-like text that bypasses detection tools like GPTZero, Turnitin,
            and more. Create authentic, engaging content that sounds naturally human.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto p-8 shadow-2xl border-orange-100">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={activeTab === "humanize" ? "default" : "outline"}
              onClick={() => setActiveTab("humanize")}
              className="flex-1 sm:flex-none"
            >
              AI Humanizer
            </Button>
            <Button
              variant={activeTab === "detect" ? "default" : "outline"}
              onClick={() => setActiveTab("detect")}
              className="flex-1 sm:flex-none"
            >
              AI Detector
            </Button>
            <Button
              variant={activeTab === "generate" ? "default" : "outline"}
              onClick={() => setActiveTab("generate")}
              className="flex-1 sm:flex-none"
            >
              Content Generator
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {activeTab === "generate" ? "Enter your prompt..." : "Paste your text..."}
              </label>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  activeTab === "generate"
                    ? "Write an essay about climate change..."
                    : "Paste your AI-generated text here..."
                }
                className="min-h-[300px] resize-none border-orange-200 focus:border-orange-400"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{inputText.length} characters</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {activeTab === "detect" ? "Detection Results" : "Humanized Content"}
              </label>
              <div className="relative">
                <Textarea
                  value={outputText}
                  readOnly
                  placeholder={
                    activeTab === "detect"
                      ? "AI detection results will appear here..."
                      : "Your humanized content will appear here..."
                  }
                  className="min-h-[300px] resize-none bg-gray-50 border-orange-200"
                />
                {outputText && (
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyToClipboard} className="bg-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{outputText.length} characters</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button
              onClick={handleProcess}
              disabled={isProcessing || !inputText.trim()}
              size="lg"
              className="px-8 py-3 text-lg"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {activeTab === "humanize" && "Humanize Text"}
                  {activeTab === "detect" && "Detect AI Content"}
                  {activeTab === "generate" && "Generate Content"}
                </>
              )}
            </Button>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Trusted by over <span className="font-semibold text-primary">5,000,000+</span> students and writers
            worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
