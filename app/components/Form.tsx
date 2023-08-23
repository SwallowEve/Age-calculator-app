import Image from "next/image";
import iconArrow from '../../assets/images/icon-arrow.svg'

export default function Form(){
    
    return(
       <form className="flex flex-row justify-between w-max mt-8 ml-5 md:ml-8 relative">
            <div className="w-20 sm:w-24 md:w-36 m-0">
                <label htmlFor="day" className="uppercase tracking-tighter text-xs font-semibold md:font-bold text-slate-500">D a y</label>
                <input className="border-solid border border-slate-300 hover:border-indigo-600 active:border-indigo-600 focus:border-indigo-600 rounded-md w-5/6 h-10 md:h-14 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold md:font-black pl-2 md:pl-4 mt-1" type="number" name='day' id='day' required placeholder="DD"></input>
            </div>
            <div className="w-20 sm:w-24 md:w-36 m-0">
                <label htmlFor="month" className="uppercase tracking-tighter text-xs font-semibold md:font-bold text-slate-500 ">M o n t h</label>
                <input className="border-solid border border-slate-300 hover:border-indigo-600 active:border-indigo-600 focus:border-indigo-600 rounded-md w-5/6 h-10 md:h-14 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold md:font-black pl-2 md:pl-4 mt-1" type="number" name='month' id='month' required placeholder="MM"></input>
            </div>
            <div className="w-20 sm:w-24 md:w-36 m-0">
                <label htmlFor="year" className="uppercase tracking-tighter text-xs font-semibold md:font-bold text-slate-500 ">Y e a r</label>
                <input className="border-solid border border-slate-300 hover:border-indigo-600 active:border-indigo-600 focus:border-indigo-600 rounded-md w-5/6 h-10 md:h-14 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold md:font-black pl-2 md:pl-4 mt-1" type="number" name='year' required id='year' placeholder="YYYY"></input>
        </div><div className="w-0 md:w-40 m-0"></div><button className="bg-black hover:bg-indigo-600 active:bg-indigo-600 border-solid border border-transparent rounded-full w-12 md:w-16 h-12 md:h-16 absolute right-24 -bottom-20 sm:right-32 md:-bottom-16 md:right-8" type="submit">
                <Image
                    className="ml-3 md:ml-4 w-5 md:w-8"
                    priority
                    src={iconArrow}
                    alt="Calculate" />
            </button>
            </form>
    )
}