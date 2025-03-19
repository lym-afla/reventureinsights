import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="f-footer-small grey-background">
      <div className="f-container-large">
        <div className="f-footer-basic">
          <Link href="/" className="f-footer-logo-mark">
            <Image src="/images/RVI-logo.svg" width={200} height={50} alt="Logo of REVentureInsights" />
          </Link>
          <div className="f-footer-line"></div>
          <a href="https://info.opreim.com/" target="_blank" rel="noopener noreferrer" className="f-footer-logo-mark">
            <Image src="/images/OPREIM-Logo.png" width={105} height={30} alt="OPREIM logo" />
          </a>
          <div className="f-footer-line"></div>
          <p className="f-footer-detail">Copyright ©{new Date().getFullYear()} REVentureInsights Ltd.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

