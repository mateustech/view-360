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
            {paths.map((item,key) => {
                return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={key} className="hidden" src={"/frames-360/"+item}/>
                )
            })}
        </div>
    )
}

const paths = [
    "frames-1.jpeg",
    "frames-3.jpeg",
    "frames-5.jpeg",
    "frames-7.jpeg",
    "frames-9.jpeg",
    "frames-11.jpeg",
    "frames-13.jpeg",
    "frames-15.jpeg",
    "frames-17.jpeg",
    "frames-19.jpeg",
    "frames-21.jpeg",
    "frames-23.jpeg",
    "frames-25.jpeg",
    "frames-27.jpeg",
    "frames-29.jpeg",
    "frames-31.jpeg",
    "frames-33.jpeg",
    "frames-35.jpeg",
    "frames-37.jpeg",
    "frames-39.jpeg",
    "frames-41.jpeg",
    "frames-43.jpeg",
    "frames-45.jpeg",
    "frames-47.jpeg",
    "frames-49.jpeg",
    "frames-51.jpeg",
    "frames-53.jpeg",
    "frames-55.jpeg",
    "frames-57.jpeg",
    "frames-59.jpeg",
]