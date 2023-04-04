import { useEffect, useRef } from "react"

export const DomRef = () => {
    const inmputRef = useRef<HTMLInputElement>(null!)

    useEffect(()=>{
        inmputRef.current?.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inmputRef} />
    </div>
  )
}
