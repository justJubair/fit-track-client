

const DashboardLayout = ({children}) => {
  return (
    <div>
      {/* sidebar */}
      <div>
    <h1>Sidebar</h1>
      </div>

      {/* Dashboard content */}
      <div>
            {children}
      </div>
    </div>
  )
}

export default DashboardLayout
