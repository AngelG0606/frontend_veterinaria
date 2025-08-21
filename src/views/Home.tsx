
import Header from "../components/Header";
import SplitText from "../TextAnimations/SplitText/SplitText";

export default function Home() {
  return (
    <>
        <div className="bg-indigo-400 w-full h-screen flex flex-col">
          <Header />

          {/* Contenedor central */}
          <div className="flex flex-col justify-center items-center flex-1 text-center">
            <SplitText 
              text="Bienvenido a Pet Clinic"
              className="text-7xl font-semibold text-white mb-6"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />

            <p className="text-2xl text-white mb-6 font-semibold">
              Cuidamos a tu mejor amigo con amor y profesionalismo
            </p>

            <p className="text-xl text-white mb-6">
              Crea tu cuenta
            </p>
            <a
              href="#contacto"
              className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
            >
              Agenda tu cita
            </a>
          </div>
        </div>

        <section className="py-20 bg-gray-50" id="servicios">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">Consultas</h3>
              <p className="text-gray-600">Atención médica general para tu mascota.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">Vacunas</h3>
              <p className="text-gray-600">Prevención y cuidado con todas las vacunas necesarias.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">Estética</h3>
              <p className="text-gray-600">Baños, cortes y limpieza profesional.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">Emergencias</h3>
              <p className="text-gray-600">Disponibles para cualquier urgencia 24/7.</p>
            </div>
          </div>
      </section>

      <section className="py-20 text-center" id="contacto">
        <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
        <p className="text-lg mb-4">📍 Av. Principal #123, Morelia, Michoacán</p>
        <p className="text-lg mb-4">📞 (443) 123-4567</p>
        <p className="text-lg mb-8">🕒 Lunes a Sábado: 9:00 AM - 8:00 PM</p>
        <a href="https://wa.me/5214431234567" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
          Escríbenos por WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6 text-center">
        <p>© 2025 Pet Clinic. Todos los derechos reservados.</p>
      </footer>


        

        
    </>
  )
}
