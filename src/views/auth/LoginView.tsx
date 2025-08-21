import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import GradientText from "../../TextAnimations/GradientText/GradientText";


export default function LoginView() {
  return (
    <>
        <GradientText 
            colors={["#40aaff", "#4079ff", "#40aaff", "#4079ff", "#40aaff"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-5xl px-1"
        >
            Inicia Sesión Pet Clinic
        </GradientText>

        <LoginForm />

        <nav className="mt-10 flex justify-between">
          <Link to={'/auth/register'} className="text-lg hover:text-indigo-500 font-semibold">
            No tienes cuenta?. Crea una.
          </Link>

          <Link to={'/auth/login'} className="text-lg hover:text-indigo-500 font-semibold">
            ¿Reestablecer Password?
          </Link>
        </nav>
    </>
  )
}
