import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div 
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      role="banner"
      className="f-navigation w-nav"
    >
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
        <nav role="navigation" className="f-navigation-menu">
          <Link href="/#home" className="f-navigation-link">Home</Link>
          <Link href="/#problem" className="f-navigation-link">Problem</Link>
          <Link href="/#for-investors" className="f-navigation-link">For Investors</Link>
          <Link href="/#for-companies" className="f-navigation-link">For Companies</Link>
          <Link href="/#database-features" className="f-navigation-link">Features</Link>
          <Link href="/#faq" className="f-navigation-link">FAQ</Link>
          <Link href="#cta" className="f-button-primary waiting-list">
            <div>Request Access</div>
          </Link>
          <Link href="/company-form" className="f-button-primary fill-form">
            <div>Fill Company Form</div>
          </Link>
        </nav>
        <div className="f-navigation-content">
          <div className="f-navigation-menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 