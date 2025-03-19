import Image from "next/image"
import Link from "next/link"

const FeaturesSection = () => {
  return (
    <div id="database-features" className="f-section-large">
      <div className="f-container-regular">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl">
            <div className="f-margin-bottom-130">
              <div className="f-headline-small-2">
                <strong>Database Features</strong>
              </div>
            </div>
            <h3 className="f-h3-heading">
              <strong>
                Unlock Exclusive Insights with Our Comprehensive Database of Emerging Real Estate Operators
              </strong>
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
            <Link href="#cta" className="f-button-primary waiting-list">
              <div>Request Access</div>
            </Link>
            <Link href="/company-form" className="f-button-primary fill-form">
              <div>Fill Company Form</div>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="f-feature-card-filled">
            <div className="f-feature-icon-wrapper-white mb-6">
              <Image
                src="/images/performance.png"
                width={100}
                height={100}
                alt="Image representing startup's performance"
              />
            </div>
            <div className="f-margin-bottom-133">
              <h5 className="f-h5-heading">
                <strong>Company Metrics</strong>
              </h5>
            </div>
            <p className="text-lg">
              Access detailed metrics, including growth history, team composition, funding records, technologies, and
              real estate pipeline.
            </p>
          </div>
          <div className="f-feature-card-filled">
            <div className="f-feature-icon-wrapper-white mb-6">
              <Image
                src="/images/eye.png"
                width={100}
                height={100}
                alt="Image representing going into industry context"
              />
            </div>
            <div className="f-margin-bottom-133">
              <h5 className="f-h5-heading">
                <strong>Industry Context</strong>
              </h5>
            </div>
            <p className="text-lg">
              Stay ahead with insights into sector growth trends, regulatory changes, and comprehensive case studies to
              inform your strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection

