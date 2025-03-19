import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CompanyFormComponent from "./company-form-component"

export default function CompanyForm() {
  return (
    <main>
      <Navbar />
      <div className="f-section-large">
        <div className="f-margin-bottom-142">
          <div className="text-center max-w-3xl mx-auto">
            <div className="f-margin-bottom-141">
              <h1 className="f-h3-heading">Profile form</h1>
            </div>
            <p className="f-paragraph-large-3">
              <strong>Nothing is mandatory</strong>. However, the more granular and detailed data you add, the better
              chance to get proper attention from investors
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <CompanyFormComponent />
        </div>
      </div>
      <Footer />
    </main>
  )
}
