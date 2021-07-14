import Image from "next/image";
import {useState} from "react";
export const View360 = () => {
    const [deg,setDeg] = useState<number>(1)
    const [degInt,setDegInt] = useState<number>(1)
    const [int,setInt] = useState<number>(1)
    const handleChange = (event: any,type: string) => {
        if(type === "deg"){
            setDeg(event.target.value)
        }
        else if(type === "degInt"){
            setDegInt(event.target.value)
        }
        else if(type === "int"){
            setInt(event.target.value)
        }
    }

    const generateArrayByCount = (count: number): number[] => {
        var array: number[] = []
        let i:number = 1
        while(i <= count){
            array.push(i)
            i += 1
        }
        return array
    }
    return (
        <div className="rounded relative w-screen h-screen flex items-center justify-center bg-gray-200">
            <div
                className="relative"
                style={{width: 1040, height: 780}}
            >
                <input
                    style={{opacity: 0}}
                    className="absolute w-full h-full z-10"
                    type="range"
                    min={1}
                    max={33}
                    value={deg}
                    onChange={event => handleChange(event,"deg")}
                    step="1"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-full"
                    src={`/frames-eric/frame-${deg}.jpeg`}
                    // src={`/frames-interior/frame-${deg}.jpeg`}
                    alt={"frame"}
                />
            </div>
            {generateArrayByCount(33).map((item,key) => {
                return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={key} className="hidden" src={`/frames-eric/frame-${item}.jpeg`}/>
                )
            })}
            <div
                className="relative"
                style={{width:1040, height: 780}}
            >
                <input
                    style={{opacity: 0}}
                    className="absolute w-full h-full z-10"
                    type="range"
                    min={1}
                    max={9}
                    value={degInt}
                    onChange={event => handleChange(event,"degInt")}
                    step="1"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-full"
                    src={`/frames-interior/frame-${degInt}.jpeg`}
                    // src={`/frames-interior/frame-${deg}.jpeg`}
                    alt={"frame"}
                />
            </div>
            {generateArrayByCount(9).map((item,key) => {
                return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={key} className="hidden" src={`/frames-interior/frame-${item}.jpeg`}/>
                )
            })}
            <div
                className="relative"
                style={{width:1040, height: 780}}
            >
                <input
                    style={{opacity: 0}}
                    className="absolute w-full h-full z-10"
                    type="range"
                    min={1}
                    max={5}
                    value={int}
                    onChange={event => handleChange(event,"int")}
                    step="1"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-full"
                    src={`/interior/frame-${int}.jpeg`}
                    alt={"frame"}
                />
            </div>
            {generateArrayByCount(5).map((item,key) => {
                return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={key} className="hidden" src={`/interior/frame-${item}.jpeg`}/>
                )
            })}
        </div>
    )
}

