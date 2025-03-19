import Image from "next/image"

const HeroSection = () => {
  return (
    <div id="home" className="f-section-large">
      <div className="f-container-regular">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="f-margin-bottom-24">
              <h1 className="f-h1-heading">
                <strong>
                  Catalysing Connectivity Between Emerging Real Estate Managers, Landlords and Capital Partners
                </strong>
              </h1>
            </div>
            <div className="f-margin-bottom-32">
              <p className="f-paragraph-large">
                Identify and monitor high-potential real estate operators. Stay at the forefront of the evolving real
                estate landscape.
              </p>
            </div>
          </div>
          <div className="f-header-image-wrapper-tall">
            <Image
              src="/placeholder.svg?height=630&width=500"
              width={500}
              height={630}
              alt="Real estate building"
              className="f-image-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

