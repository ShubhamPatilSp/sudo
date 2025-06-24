"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Will this help me bypass AI detectors like Turnitin or GPTZero?",
    answer:
      "Yes, our AI humanizer is specifically designed to transform AI-generated content into natural, human-like text that can bypass most AI detection tools including Turnitin, GPTZero, and others.",
  },
  {
    question: "Do you store my content?",
    answer:
      "No, we prioritize your privacy. Your content is processed securely and is not stored on our servers after processing is complete.",
  },
  {
    question: "Do I need to create an account to use the tool?",
    answer:
      "You can try our basic features without an account, but creating a free account gives you access to more features and monthly credits.",
  },
  {
    question: "What if the quality still sounds robotic?",
    answer:
      "Our advanced algorithms continuously improve. If you're not satisfied with the results, you can try processing the text again or contact our support team for assistance.",
  },
  {
    question: "Can I receive essays, emails, or marketing copy?",
    answer:
      "Yes, our content generator can create various types of content including essays, emails, marketing copy, social media posts, and more.",
  },
  {
    question: "Does this pass Turnitin AI detection?",
    answer:
      "Our humanizer is designed to help content pass various AI detection tools, including Turnitin's AI detection features, by making the text appear more naturally human-written.",
  },
  {
    question: "Do I have the quality of my writing?",
    answer:
      "Our tool is designed to maintain and often improve the quality of your writing while making it appear more human-like and natural.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your questions, <span className="text-primary">answered</span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about our AI writing tools</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-orange-100">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
