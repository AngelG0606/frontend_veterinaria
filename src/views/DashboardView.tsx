import SplitText from "../TextAnimations/SplitText/SplitText";

export default function DashboardView() {
  return (
    <>
        <div className="mt-10 w-full mx-auto">
            <SplitText 
              text="Bienvenido a Clinic Little Paws "
              className="text-7xl font-semibold text-indigo-400 mb-6 text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />

            
        </div>
    </>
  )
}
