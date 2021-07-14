import Image from "next/image";
import {useState} from "react";
export const View360 = () => {
    const [deg,setDeg] = useState<number>(1)
    const [frame,setFrame] = useState<string>("frames-eric")
    const [limits,setLimits] = useState<{ min:number,max:number }>({min: 1,max:33})

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
    const handleOpen = () => {
        setFrame("frames-interior")
        setLimits({min: 1,max: 9})
        setDeg(1)
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
                    min={limits.min}
                    max={limits.max}
                    value={deg}
                    onChange={event => handleChange(event,"deg")}
                    step="1"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {deg == 15 ?
                    <a
                        style={{top: "50%",left: "50%"}}
                        onClick={() => handleOpen()}
                        className="absolute bg-gray-200 p-1 rounded shadow flex items-center justify-center cursor-pointer z-20">
                        <span className="text-xs m-0 text-gray-700 font-bold">ENTRAR</span>
                    </a>
                    : null}
                <img
                    className="w-full"
                    src={`/${frame}/frame-${deg}.jpeg`}
                    // src={`/frames-interior/frame-${deg}.jpeg`}
                    alt={"frame"}
                />
            </div>
            {generateArrayByCount(33).map((item,key) => {
                return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={key} className="hidden" src={`/${frame}/frame-${item}.jpeg`}/>
                )
            })}
            {/*<div*/}
            {/*    className="relative"*/}
            {/*    style={{width:1040, height: 780}}*/}
            {/*>*/}
            {/*    <input*/}
            {/*        style={{opacity: 0}}*/}
            {/*        className="absolute w-full h-full z-10"*/}
            {/*        type="range"*/}
            {/*        min={1}*/}
            {/*        max={9}*/}
            {/*        value={degInt}*/}
            {/*        onChange={event => handleChange(event,"degInt")}*/}
            {/*        step="1"/>*/}
            {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
            {/*    <img*/}
            {/*        className="w-full"*/}
            {/*        src={`/frames-interior/frame-${degInt}.jpeg`}*/}
            {/*        // src={`/frames-interior/frame-${deg}.jpeg`}*/}
            {/*        alt={"frame"}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*{generateArrayByCount(9).map((item,key) => {*/}
            {/*    return (*/}
            {/*        // eslint-disable-next-line @next/next/no-img-element*/}
            {/*        <img key={key} className="hidden" src={`/frames-interior/frame-${item}.jpeg`}/>*/}
            {/*    )*/}
            {/*})}*/}
            {/*<div*/}
            {/*    className="relative"*/}
            {/*    style={{width:1040, height: 780}}*/}
            {/*>*/}
            {/*    <input*/}
            {/*        style={{opacity: 0}}*/}
            {/*        className="absolute w-full h-full z-10"*/}
            {/*        type="range"*/}
            {/*        min={1}*/}
            {/*        max={5}*/}
            {/*        value={int}*/}
            {/*        onChange={event => handleChange(event,"int")}*/}
            {/*        step="1"/>*/}
            {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
            {/*    <img*/}
            {/*        className="w-full"*/}
            {/*        src={`/interior/frame-${int}.jpeg`}*/}
            {/*        alt={"frame"}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*{generateArrayByCount(5).map((item,key) => {*/}
            {/*    return (*/}
            {/*        // eslint-disable-next-line @next/next/no-img-element*/}
            {/*        <img key={key} className="hidden" src={`/interior/frame-${item}.jpeg`}/>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}

