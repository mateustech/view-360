import Image from "next/image";
import {useState} from "react";
export const View360 = () => {
    const [deg,setDeg] = useState<number>(1)
    const handleChange = (event: any) => {
        console.log(event.target.value)
        setDeg(event.target.value)
    }

    return (
        <div className="rounded relative w-screen h-screen lg:px-44 flex items-center justify-center bg-gray-200">
            <div
                className="relative"
                style={{width:1040/2, height: 780/2}}
            >
                <input
                    style={{opacity: 0}}
                    className="absolute w-full h-full z-10"
                    type="range"
                    min={1}
                    max={59}
                    value={deg}
                    onChange={event => handleChange(event)}
                    step="2"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-full"
                    src={`/frames-360/frames-${deg}.jpeg`}
                    alt={"frame"}
                />
            </div>
        </div>
    )
}