import Footer from "@/components/Shared/Footer/Footer"
import Nav from "@/components/Shared/Nav/Nav"


const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
