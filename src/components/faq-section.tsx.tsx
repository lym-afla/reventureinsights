"use client"

import { useState } from "react"

const FAQSection = () => {
  // State to track which FAQ items are open
  const [openInvestorFAQs, setOpenInvestorFAQs] = useState<number[]>([])
  const [openCompanyFAQs, setOpenCompanyFAQs] = useState<number[]>([])

  // Toggle FAQ open/close
  const toggleInvestorFAQ = (index: number) => {
    if (openInvestorFAQs.includes(index)) {
      setOpenInvestorFAQs(openInvestorFAQs.filter((i) => i !== index))
    } else {
      setOpenInvestorFAQs([...openInvestorFAQs, index])
    }
  }

  const toggleCompanyFAQ = (index: number) => {
    if (openCompanyFAQs.includes(index)) {
      setOpenCompanyFAQs(openCompanyFAQs.filter((i) => i !== index))
    } else {
      setOpenCompanyFAQs([...openCompanyFAQs, index])
    }
  }

  // FAQ data
  const investorFAQs = [
    {
      question: "How often is the database updated?",
      answer:
        "Our database is updated daily with new manager profiles, funding activities, and market developments. We conduct regular reviews to maintain data accuracy.",
    },
    {
      question: "How do you verify the information in your database?",
      answer:
        "We compile information from direct manager submissions and public sources cross-referencing all critical data to ensure reliability.",
    },
    {
      question: "What services do you provide beyond database access?",
      answer:
        "We facilitate introductions between investors and companies. Upon request, we can provide detailed information and analytics to support your due diligence process. When requested, we are able to directly handle the execution, offering advice at all stages of the investment process.",
    },
  ]

  const companyFAQs = [
    {
      question: "What information should I include in my profile?",
      answer:
        "Emphasize your unique value proposition, target market, competitive advantages, team qualifications, current traction, and future goals. Our structured template will guide you through the process.",
    },
    {
      question: "How can I maximize visibility to investors?",
      answer:
        "Regularly update your profile with detailed metrics and milestones. Engage with our platform's analytics tools to optimize your presentation and increase visibility to potential investors.",
    },
    {
      question: "What if my venture is pre-revenue?",
      answer:
        "Pre-revenue startups are welcome. Our platform supports companies at all stages, including pre-revenue. We focus on showcasing your potential, strategy, and unique value proposition to attract the right investors.",
    },
    {
      question: "How do you protect our confidential information?",
      answer:
        "We implement strong security measures and allow you to control what information is visible to different types of users. When investors indicate further interest, we can help with handing detailed due diligence process after signing NDAs.",
    },
    {
      question: "What support do you provide during investor discussions?",
      answer:
        "We can facilitate introductions, and offer transaction advisory services if needed. Our team can also help with due diligence preparation.",
    },
  ]

  return (
    <section id="faq" className="f-section-large grey-background">
      <div className="f-container-regular">
        <div className="f-margin-bottom-128">
          <div className="text-center max-w-2xl mx-auto">
            <div className="f-margin-bottom-16">
              <h2 className="f-h3-heading">Frequently asked questions</h2>
            </div>
            <div className="f-paragraph-large-2">Additional information you might want to know about our database.</div>
          </div>
        </div>
        <div className="uui-faq04_component">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Investor FAQs */}
            <div className="target-card investor">
              <h2 className="text-3xl font-bold mb-6">
                For <span className="text-span">Investors</span>
              </h2>
              <div className="f-content-divider"></div>
              <div className="uui-faq04_list first-col">
                {investorFAQs.map((faq, index) => (
                  <div
                    key={`investor-faq-${index}`}
                    className={`uui-faq04_accordion ${index === investorFAQs.length - 1 ? "last-item" : ""}`}
                  >
                    <div className="uui-faq04_question" onClick={() => toggleInvestorFAQ(index)}>
                      <div className="uui-faq04_heading">{faq.question}</div>
                      <div className="uui-faq04_icon-wrapper">
                        <div className="accordion-icon_component">
                          <div className="accordion-icon_horizontal-line"></div>
                          <div
                            className="accordion-icon_vertical-line"
                            style={{
                              transform: openInvestorFAQs.includes(index)
                                ? "translateX(-50%) rotate(90deg)"
                                : "translateX(-50%)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="uui-faq04_answer"
                      style={{
                        height: openInvestorFAQs.includes(index) ? "auto" : "0px",
                        overflow: "hidden",
                        transition: "height 0.3s ease",
                      }}
                    >
                      <div className="uui-text-size-medium pt-4">{faq.answer}</div>
                      <div className="uui-space-medium"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company FAQs */}
            <div className="target-card company">
              <h2 className="text-3xl font-bold mb-6">
                For <span className="text-span-2">Companies</span>
              </h2>
              <div className="f-content-divider"></div>
              <div className="uui-faq04_list">
                {companyFAQs.map((faq, index) => (
                  <div
                    key={`company-faq-${index}`}
                    className={`uui-faq04_accordion ${index === companyFAQs.length - 1 ? "last-item" : ""}`}
                  >
                    <div className="uui-faq04_question" onClick={() => toggleCompanyFAQ(index)}>
                      <div className="uui-faq04_heading">{faq.question}</div>
                      <div className="uui-faq04_icon-wrapper">
                        <div className="accordion-icon_component">
                          <div className="accordion-icon_horizontal-line"></div>
                          <div
                            className="accordion-icon_vertical-line"
                            style={{
                              transform: openCompanyFAQs.includes(index)
                                ? "translateX(-50%) rotate(90deg)"
                                : "translateX(-50%)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="uui-faq04_answer"
                      style={{
                        height: openCompanyFAQs.includes(index) ? "auto" : "0px",
                        overflow: "hidden",
                        transition: "height 0.3s ease",
                      }}
                    >
                      <div className="uui-text-size-medium pt-4">{faq.answer}</div>
                      <div className="uui-space-medium"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

