import { useFormContext } from "react-hook-form"

export const Input = ({}) => {
    return <div>input!</div>
}

const InputError = () => {
    return <div>error</div>
}

const framer_error = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 10},
    transition: { duration: 0.2},
}