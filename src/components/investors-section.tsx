import Image from "next/image"
import Link from "next/link"

const InvestorsSection = () => {
  return (
    <div id="for-investors" className="f-section-large">
      <div className="f-container-regular">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="f-margin-bottom-154">
              <div className="f-headline-small-2">
                <span className="text-span">For investors </span>
              </div>
            </div>
            <div className="f-margin-bottom-155">
              <h2 className="f-h2-heading">
                <strong>Discover and Invest in Emerging Real Estate Managers.</strong>
              </h2>
            </div>
            <p className="f-paragraph-large-5">Your go-to platform for insights into real estate ventures worldwide.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="text-base">Geospatial analysis</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="text-base">Comprehensive search filters</div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="#cta" className="f-button-primary waiting-list">
                <div>Request Access</div>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              width={600}
              height={500}
              alt="For investors platform screenshot"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorsSection

