import Image from "next/image"
import Link from "next/link"

const CompaniesSection = () => {
  return (
    <div id="for-companies" className="f-section-large grey-background">
      <div className="f-container-regular">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              width={600}
              height={500}
              alt="For companies platform screenshot"
              className="rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="f-margin-bottom-156">
              <div className="f-headline-small-2">
                <span className="text-span-2">For companies</span>
              </div>
            </div>
            <div className="f-margin-bottom-157">
              <h3 className="f-h3-heading">
                <strong>Elevate Your Visibility to Capital Providers.</strong>
              </h3>
            </div>
            <p className="f-paragraph-large-5">
              Engage with leading institutional investors, family offices and strategic partners to drive your growth
              and secure strategic capital.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-company-color">
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
                <div className="text-base">Profile builder</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-company-color">
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
                <div className="text-base">Up-to-date public equity story</div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/company-form" className="f-button-primary fill-form">
                <div>Fill Company Form</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompaniesSection

