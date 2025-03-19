import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="f-navigation">
      <div className="f-navigation-container">
        <Link href="/" className="f-navigation-logo-link">
          <Image
            width={319}
            height={80}
            src="/images/RVI-logo.svg"
            alt="Logo of REVentureInsights"
            className="f-logo"
          />
        </Link>
        <nav className="f-navigation-menu">
          <Link href="/#home" className="f-navigation-link">
            Home
          </Link>
          <Link href="/#problem" className="f-navigation-link">
            Problem
          </Link>
          <Link href="/#for-investors" className="f-navigation-link">
            For Investors
          </Link>
          <Link href="/#for-companies" className="f-navigation-link">
            For Companies
          </Link>
          <Link href="/#database-features" className="f-navigation-link">
            Features
          </Link>
          <Link href="/#faq" className="f-navigation-link">
            FAQ
          </Link>
          <Link href="#cta" className="f-button-primary waiting-list">
            <div>Request Access</div>
          </Link>
          <Link href="/company-form" className="f-button-primary fill-form">
            <div>Fill Company Form</div>
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="p-2">
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
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

