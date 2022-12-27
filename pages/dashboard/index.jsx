import SideNavbar from "../../components/global/sideNavBar";

export default function Home() {
  return (
    <>
      <SideNavbar />
      <div className="flex flex-col justify-start items-center w-full h-screen bg-gray-100">
        <span>Estadisticas</span>
      </div>
    </>
  );
}
