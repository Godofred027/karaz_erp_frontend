import LoginLayout from "../components/login/loginLayout";
import GlobalLayout from "../components/global/globalLayout";

export default function Login() {
  return (
    <GlobalLayout title="Login" description="Iniciar Secion">
      <LoginLayout />
    </GlobalLayout>
  );
}
