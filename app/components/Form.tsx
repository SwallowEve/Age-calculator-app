'use client'
import Image from "next/image";
import iconArrow from '../../assets/images/icon-arrow.svg'
import Input from "./Input";
import {FormProvider, useForm} from 'react-hook-form'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { calcAge } from "../utils/calcAge";

const Form = (Props: { sendData: (arg0: { year: string; month: string; day: string; }) => void; }) => {
    const methods = useForm()
    const [success, setSuccess] = useState(true)
    const inputValue: string[] = []    
    
    const onSubmit = methods.handleSubmit(data => {
       methods.reset()
       let age: {year: string, month: string, day: string}
       let checkDate:boolean|undefined = true
       
       inputValue.push(data.day, data.month, data.year)
       checkDate =  checkValues(inputValue)
       checkDate ? setSuccess(true) : setSuccess(false)
       checkDate ? calcAge(inputValue) : calcAge(['undefined'])
       checkDate ?
       age = {
            year: calcAge(inputValue)[0].toString(),
            month: calcAge(inputValue)[1].toString(),
            day: calcAge(inputValue)[2].toString(),
       } :
       age = {
            year: '--',
            month: '--',
            day: '--',
       } 
       Props.sendData(age)
    })
    
    return(
        <FormProvider {...methods}>
            <form 
                onSubmit={e => e.preventDefault()}
                noValidate
                autoComplete="off"
                className="flex flex-row justify-between w-max mt-8 ml-5 md:ml-8 relative"
            >
                <Input 
                label="day"
                name="day"
                type="number"
                id='day'
                placeholder= 'DD'
                mainStatus = {success}
                validation= {{
                    required: {
                        value: true,
                        message: 'This field is required',
                    },
                    min: {
                        value: '1',
                        message: 'Must be a valid day',
                    },
                    max: {
                        value: '31',
                        message: 'Must be a valid day',
                    },
                    maxLength: {
                        value: 2,
                        message: 'Must be a valid day',
                    },
                }}
                ></Input>
                <Input 
                    label="month"
                    name="month"
                    type="number"
                    id='month'
                    placeholder= 'MM'
                    mainStatus = {success}
                    validation= {{
                        required: {
                            value: true,
                            message: 'This field is required',
                        }, 
                        min: {
                            value: '1',
                            message: 'Must be a valid month',
                        },
                        max: {
                            value: '12',
                            message: 'Must be a valid month',
                        } ,                     
                        maxLength: {
                            value: 2,
                            message: 'Must be a valid month',
                        },
                    }}
                ></Input>
                <Input 
                    label="year"
                    name="year"
                    type="number"
                    id='year'
                    placeholder= 'YYYY'
                    mainStatus = {success}
                    validation= {{
                        required: {
                            value: true,
                            message: 'This field is required',
                        }, 
                        min: {
                            value: '1',
                            message: 'Must be in the past',
                        },
                        max: {
                            value: '2023',
                            message: 'Must be in the past',
                        } ,                      
                        maxLength: {
                            value: 4,
                            message: 'Must be in the past',
                        },
                    }}
                ></Input>
                <div className="w-0 md:w-40 m-0"></div>                
                <button 
                    onClick={onSubmit}
                    className="bg-black hover:bg-indigo-600 active:bg-indigo-600 border-solid border border-transparent rounded-full w-12 md:w-16 h-12 md:h-16 absolute right-24 -bottom-20 sm:right-32 md:-bottom-16 md:right-8" type="submit"
                >
                    <Image
                        className="ml-3 md:ml-4 w-5 md:w-8"
                        priority
                        src={iconArrow}
                        alt="Calculate" />
                </button>
            </form>
            <AnimatePresence 
                mode="wait" 
                initial={false}
                >
                {!success && (
                    <InputError
                    message="Must be a valid date"
                    key="Must be a valid date"
                    />
                )}
            </AnimatePresence>              
        </FormProvider>
    )
}

const checkValues = (date: string[]) => {
    let month = parseInt(date[1]);
    let day = parseInt(date[0]);
    let year = parseInt(date[2]); 
    let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 1 || month > 2) {
        if (day > ListofDays[month - 1]) {
            return false;
        }
    } else if (month == 2) {
        let leapYear = false;
        if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
        if ((leapYear == false) && (day >= 29)) return false;
        else
            if ((leapYear == true) && (day > 29)) {
                return false;
            }
    }
    return true;
}

const InputError = ({message}:any) => {
    return (
        <motion.p 
            className="italic pt-2 tracking-tighter font-normal text-xs text-red-500 bg-white-100  ml-5 md:ml-8 -mb-6"
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

export default Form