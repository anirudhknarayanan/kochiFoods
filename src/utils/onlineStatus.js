import { useEffect, useState } from "react"

const onlineStatus = ()=>{

    const  [onlineStatus , setonlineStaus] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStaus(false)
        })
        window.addEventListener("online",()=>{
            setonlineStaus(true)
        })
    },[])

    
    return onlineStatus
}
export default onlineStatus