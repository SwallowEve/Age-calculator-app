'use client'
import { SetStateAction, useState } from "react";
import Form from "./Form"

export default function FormWrap() {
    const [age, setAge] = useState({
        year: '--',
        month: '--',
        day: '--',
    })
    const sendData = (age: SetStateAction<{ year: string; month: string; day: string; }>) => {
        setAge(age)
    }
    
    return(
        <div className="z-10 w-max place-self-center mt-10 max-h-fit rounded-2xl bg-white wrap-corner">
            <Form sendData={sendData}></Form>
            <hr className="m-5 md:m-8 mt-14 md:mt-9 h-0.2 bg-slate-100 "></hr>
            <div className="m-5 md:m-8 mt-10 text-5xl md:text-6xl tracking-tight font-black italic mb-10">
                <p className=" text-black">
                    <span id="pYear" className="text-[#864cff]">{age.year}</span> years
                </p>
                <p className=" text-black">
                    <span id="pMonth" className="text-[#864cff]">{age.month}</span> months
                </p>
                <p className=" text-black">
                    <span id="pDay" className="text-[#864cff]">{age.day}</span> days
                </p>
            </div>
        </div>
    )
}