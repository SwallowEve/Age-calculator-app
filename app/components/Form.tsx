'use client'
import Image from "next/image";
import iconArrow from '../../assets/images/icon-arrow.svg'
import Input from "./Input";
import {FormProvider, useForm} from 'react-hook-form'
//import { useState } from "react";

const Form = () => {
    const methods = useForm()
    //const [success, setSuccess] = useState(false)

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
        //methods.reset()
       // setSuccess(true)
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
        </FormProvider>
    )
}

export default Form