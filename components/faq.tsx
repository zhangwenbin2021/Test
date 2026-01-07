import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is CodeZS?",
    answer:
      "CodeZS is a web-based AI image editor. You upload an image, write what you want changed, and the Service generates an edited result.",
  },
  {
    question: "How do I use it?",
    answer:
      "Upload an image, enter a clear prompt (what to change, what to keep), then click Generate. If the result is not what you want, refine the prompt and try again.",
  },
  {
    question: "What kinds of edits work well?",
    answer:
      "Common tasks include background replacement, adding/removing objects, changing style, and adjusting lighting. Results can vary depending on the input and prompt.",
  },
  {
    question: "Is customer support reachable?",
    answer:
      "Yes. Email support@codezs.online and we will help with product questions and billing issues.",
  },
  {
    question: "Where can I find the Privacy Policy and Terms?",
    answer:
      "You can review them here: Privacy Policy and Terms of Service.",
    links: true,
  },
]

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-20 bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">FAQs</h2>
          <p className="text-lg text-muted-foreground text-pretty">Frequently Asked Questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg border border-border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.links ? (
                  <>
                    <Link className="text-foreground underline underline-offset-4" href="/privacy">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link className="text-foreground underline underline-offset-4" href="/terms">
                      Terms of Service
                    </Link>
                    .
                  </>
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

