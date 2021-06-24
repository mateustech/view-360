import Image from "next/image";
import {useEffect, useState} from "react";
export const View360 = () => {
    const [deg,setDeg] = useState<number>(1)
    const handleChange = (event) => {
        setDeg(event.target.value)
    }

    return (
        <div className="bg-white rounded relative">
            <input
                style={{opacity: 0}}
                className="absolute w-screen h-screen lg:px-40 flex items-center justify-center bg-gray-200"
                type="range"
                min="1" max="60"
                value={deg}
                onChange={event => handleChange(event)}
                step="1"/>
            <img style={{cursor: "col-resize"}} width={1040/2} height={780/2} src={`/frames-360/frames-${deg}.jpeg`}  alt={"frame"}/>
        </div>
    )
}