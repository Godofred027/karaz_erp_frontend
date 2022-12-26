import GlobalLayout from "../../components/layouts/global-layout";
import SideNavbar from "../../components/dashboard/side-navbar";

export default function Home() {
  return (
    <GlobalLayout title="Dashboard" description="Dashboard Karaz ERP">
      <SideNavbar />
        <div className="flex flex-col justify-start items-center w-full h-screen bg-gray-100">
            <span>Estadisticas</span>
        </div>
    </GlobalLayout>
  );
}
