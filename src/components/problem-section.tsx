import Image from "next/image"

const ProblemSection = () => {
  return (
    <div id="problem" className="f-section-large grey-background">
      <div className="f-container-regular">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="f-margin-bottom-12">
            <span className="f-heading-detail-small">Problem</span>
          </div>
          <div className="f-margin-bottom-128">
            <div className="f-margin-bottom-16">
              <h3 className="f-h3-heading">
                The Real Estate Information Gap: Disconnected Players, Missed Opportunities.
              </h3>
            </div>
            <p className="f-paragraph-large-2">
              The digital revolution has transformed real estate into a more fluid, short-term income-producing asset
              class that requires active management. This shift has fuelled the rise of real estate entrepreneurs
              launching independent, sector-specialized operating companies. Our database connects these emerging
              managers with capital.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="f-feature-icon-wrapper">
                <Image src="/images/investor.png" width={72} height={72} alt="Image of an investor" />
              </div>
              <div>
                <div className="text-xl font-semibold">
                  <span className="text-span">Investors</span>
                </div>
              </div>
            </div>
            <p className="f-paragraph-small">
              Absence of a centralized platform to track real estate operators across geographies and subsectors,
              resulting in missed opportunities for investors seeking emerging ventures across regions and sectors.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="f-feature-icon-wrapper">
                <Image
                  src="/images/shuttle.png"
                  width={72}
                  height={72}
                  alt="Image of a shuttle representing high-growing startup"
                />
              </div>
              <div className="f-margin-bottom-33">
                <div className="text-xl font-semibold">
                  <span className="text-span-2">Companies</span>
                </div>
              </div>
            </div>
            <p className="f-paragraph-small">
              Companies face challenges in expanding their reach beyond local networks, restricting access to capital
              and hindering growth potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemSection

