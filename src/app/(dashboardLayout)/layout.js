import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
     <div className="grid grid-cols-12 min-h-screen">

      {/* sidebar */}
      <div className="lg:w-8">
        <Sidebar/>
      </div>

      {/* content */}
      <div className="col-span-12 lg:col-span-11 mt-14 md:mt-10 lg:mt-0">
        {children}
      </div>
      </div>
    </>
  );
};

export default DashboardLayout;
