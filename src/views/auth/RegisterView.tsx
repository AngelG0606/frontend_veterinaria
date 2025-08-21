import { Link } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import GradientText from "../../TextAnimations/GradientText/GradientText";

export default function RegisterView() {
  return (
    <>
        <GradientText 
          colors={["#40aaff", "#4079ff", "#40aaff", "#4079ff", "#40aaff"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-5xl px-1"
        >
          Crea tu cuenta en Pet Clinic
        </GradientText>

        <RegisterForm />

        <nav className="mt-10 flex justify-between">
          <Link to={'/auth/login'} className="text-lg hover:text-indigo-500 font-semibold">
            ¿Ya tienes cuenta?. Inicia Sesión.
          </Link>

          <Link to={'/auth/login'} className="text-lg hover:text-indigo-500 font-semibold">
            ¿Reestablecer Password?
          </Link>
        </nav>
    </>
  )
}
