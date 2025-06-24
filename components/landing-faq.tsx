import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const LandingFaq = () => {
  const faqs = [
    {
      question: "Will this help me bypass AI detectors like Turnitin or GPTZero?",
      answer: "Absolutely. Whether you're working with essays, blog posts, emails, or ChatGPT output, NaturalWrite helps you humanize AI text and refine it for tone, clarity, and detection safety."
    },
    {
      question: "Do you store my content?",
      answer: "Your content is yours. We don't store it or use it for any purpose other than to provide you with the service."
    },
    {
      question: "Do I need to create an account to use the tool?",
      answer: "Yes, a free account is required to use the tool and access all its features."
    },
    {
      question: "What if the rewrite still sounds robotic?",
      answer: "Our AI is constantly learning. If you're not happy with a rewrite, you can try again or adjust the settings for a different result."
    },
    {
      question: "Can it rewrite essays, emails, or marketing copy?",
      answer: "Yes, it can handle a wide variety of content types, from academic essays to professional emails and marketing materials."
    },
    {
      question: "Does this pass Turnitin AI detection?",
      answer: "Our tool is designed to produce content that is indistinguishable from human writing, making it highly effective at bypassing AI detectors like Turnitin."
    },
    {
      question: "Does it lower the quality of my writing?",
      answer: "Not at all. In fact, it can help improve the quality of your writing by offering suggestions for clarity, tone, and style."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Your questions, answered
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem value={`item-${i + 1}`} key={i}>
              <AccordionTrigger className="text-gray-800 font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
