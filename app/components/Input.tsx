import { useFormContext } from "react-hook-form"
import { findInputError } from "../utils/findInputError";
import {isInputInvalid} from "../utils/isInputInvalid"
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    label:string;
    type:string;
    id:string;
    placeholder:string;
    validation: {required: {value: boolean, message: string}, min: {value: string, message: string}, max: {value: string, message: string}, maxLength: {value: number, message: string}};
    name: string;
    mainStatus: boolean;
}

const Input = ({ label, type, id, placeholder, validation, name, mainStatus}: Props) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const inputError:any = findInputError(errors, name)
    const isInvalid = isInputInvalid(inputError)
     
    return (
        <div className="w-20 sm:w-24 md:w-36 m-0">
        <label 
        htmlFor={id} 
        className={
            (!mainStatus || isInvalid) ? 
            "uppercase tracking-widest text-xs font-semibold md:font-bold text-red-500" :
            "uppercase tracking-widest text-xs font-semibold md:font-bold text-slate-500"}>
            {label}
        </label>       
        <input
            className="border-solid border border-slate-300 hover:border-[#864cff] focus-visible:outline-[#864cff] focus:outline-[#864cff] rounded-md w-5/6 h-10 md:h-14 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold md:font-black pl-2 md:pl-4 mt-1" 
            type={type} 
            id={id} 
            placeholder={placeholder}
            {...register(name, validation)}
        >
        </input>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
    </div>
        )
}

const InputError = ({message}:any) => {
    return (
        <motion.p 
            className="italic pt-2 tracking-tighter font-normal text-xs text-red-500 bg-white-100"
            {...framer_error}
        >
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 10},
    transition: { duration: 0.2},
}

export default Input