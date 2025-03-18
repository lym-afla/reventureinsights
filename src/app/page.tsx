import ContactForm from "@/components/ContactForm";
import CounterSection from "@/components/CounterSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div id="home" className="f-section-large">
        <div className="f-container-regular">
          <div className="w-layout-grid f-header-grid">
            <div>
              <div className="f-margin-bottom-24">
                <h1 className="f-h1-heading">
                  <strong>
                    Catalysing Connectivity Between Emerging Real Estate
                    Managers, Landlords and Capital Partners
                  </strong>
                </h1>
              </div>
              <div className="f-margin-bottom-32">
                <p className="f-paragraph-large">
                  Identify and monitor high-potential real estate operators. Stay
                  at the forefront of the evolving real estate landscape.
                </p>
              </div>
            </div>
            <div className="f-header-image-wrapper-tall">
              <Image
                src="/images/hero-image.avif"
                width={1024}
                height={768}
                alt="Real estate buildings"
                className="f-image-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <CounterSection sectorCount={40} companyCount={200} />

      {/* Problem Section */}
      <div id="problem" className="f-section-large grey-background">
        <div className="f-container-regular-2">
          <div className="f-header-title-wrapper-center">
            <div className="f-margin-bottom-12">
              <span className="f-heading-detail-small">Problem</span>
            </div>
            <div className="f-margin-bottom-128">
              <div className="f-margin-bottom-16">
                <h3 className="f-h3-heading">
                  The Real Estate Information Gap: Disconnected Players, Missed
                  Opportunities.
                </h3>
              </div>
              <p className="f-paragraph-large-2">
                The digital revolution has transformed real estate into a more
                fluid, short-term income-producing asset class that requires
                active management. This shift has fuelled the rise of real estate
                entrepreneurs launching independent, sector-specialized operating
                companies. Our database connects these emerging managers with
                capital.
              </p>
            </div>
          </div>
          
          {/* Problem Cards */}
          <div className="w-layout-grid f-grid-two-column">
            <div className="div-block-8">
              <div className="div-block">
                <div className="f-feature-icon-wrapper">
                  <Image
                    src="/images/investor.png"
                    width={64}
                    height={64}
                    alt="Image of an investor"
                  />
                </div>
                <div>
                  <div className="f-sub-heading-large">
                    <span className="text-span-5">Investors</span>
                  </div>
                </div>
              </div>
              <p className="f-paragraph-small">
                Absence of a centralized platform to track real estate operators
                across geographies and subsectors, resulting in missed
                opportunities for investors seeking emerging ventures across
                regions and sectors.
              </p>
            </div>
            <div className="div-block-8">
              <div className="div-block">
                <div className="f-feature-icon-wrapper">
                  <Image
                    src="/images/shuttle.png"
                    width={64}
                    height={64}
                    alt="Image of a shuttle representing high-growing startup"
                  />
                </div>
                <div className="f-margin-bottom-33">
                  <div className="f-sub-heading-large">
                    <span className="text-span-6">Companies</span>
                  </div>
                </div>
              </div>
              <p className="f-paragraph-small">
                Companies face challenges in expanding their reach beyond local
                networks, restricting access to capital and hindering growth
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More sections will be added here... */}
      
      {/* CTA Section */}
      <div id="cta" className="f-section-large">
        <div className="f-container-regular-5">
          <div className="w-layout-grid f-header-grid-2">
            <div className="target-card investor">
              <div className="f-cta-text-wrapper-center">
                <div className="f-margin-bottom-135">
                  <h2 className="f-h2-heading">Interested to get access?</h2>
                </div>
                <div className="f-margin-bottom-48">
                  <p className="f-paragraph-large">
                    Request access by providing your email below
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
            <div className="target-card company">
              <div className="f-cta-text-wrapper-center">
                <div className="f-margin-bottom-135">
                  <h2 className="f-h2-heading">Ready to fill the form?</h2>
                </div>
                <div className="f-margin-bottom-48">
                  <p className="f-paragraph-large">
                    Provide your key information to be included in our database
                  </p>
                </div>
                <div className="f-cta-form-block">
                  <Link
                    href="/company-form"
                    className="f-button-primary fill-form"
                  >
                    <div>Fill Company Form</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 