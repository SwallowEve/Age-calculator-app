import Form from "./Form"

export default function FormWrap() {
    return(
        <div className="z-10 max-w-5xl w-7/12 place-self-center mt-10 max-h-fit rounded-2xl bg-white wrap-corner">
            <Form></Form>
            <hr className="m-11 mt-10 h-0.5 bg-slate-100 "></hr>
            <div className="ml-11 text-5xl tracking-tight font-black italic">
            <p className=" text-black">years</p>
            <p className=" text-black">months</p>
            <p className=" text-black">days</p>
            </div>
        </div>
    )
}