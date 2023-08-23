import Form from "./Form"

export default function FormWrap() {
    return(
        <div className="z-10 w-max place-self-center mt-10 max-h-fit rounded-2xl bg-white wrap-corner">
            <Form></Form>
            <hr className="m-5 md:m-8 mt-14 md:mt-9 h-0.2 bg-slate-100 "></hr>
            <div className="m-5 md:m-8 mt-10 text-5xl md:text-6xl tracking-tight font-black italic mb-10">
            <p className=" text-black"><span id="pYear" className="text-indigo-600">--</span> years</p>
            <p className=" text-black"><span id="pMonth" className="text-indigo-600">--</span> months</p>
            <p className=" text-black"><span id="pDay" className="text-indigo-600">--</span> days</p>
            </div>
        </div>
    )
}