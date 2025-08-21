import type React from "react";

export default function ErrroMessage({children} : {children : React.ReactNode}) {
  return ( 
    <div className="text-red-600 bg-red-100 text-center uppercase py-2 px-3 w-full my-1 font-bold">
        {children}
    </div>
  )
}
