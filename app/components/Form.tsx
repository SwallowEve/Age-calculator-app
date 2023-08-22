
export default function Form(){
    return(
        <div className="flex flex-row justify-between max-w-xl w-8/12  mt-8 ml-11 ">
            <div className="w-32 m-0">
            <label htmlFor="day" className="uppercase tracking-tighter text-xs font-bold text-slate-500">D a y</label>
            <input className="border-solid border border-slate-300 hover:border-indigo-600 active:border-indigo-600 focus:border-indigo-600 rounded-md w-full h-14 text-2xl font-black pl-4 mt-1" type="number" name='day'></input>
        </div><div className="w-32 m-0">
                <label htmlFor="month" className="uppercase tracking-tighter text-xs font-bold text-slate-500 ">M o n t h</label>
                <input className="border-solid border border-slate-300 hover:border-indigo-600 active:border-indigo-600 focus:border-indigo-600 rounded-md w-full h-14 text-2xl font-black pl-4 mt-1" type="number" name='month'></input>
            </div><div className="w-32 m-0 mr-3">
                <label htmlFor="year" className="uppercase tracking-tighter text-xs font-bold text-slate-500 ">Y e a r</label>
                <input className="border-solid border border-slate-300 hover:border-indigo-600 active:border-indigo-600 focus:border-indigo-600 rounded-md w-full h-14 text-2xl font-black pl-4 mt-1" type="number" name='year'></input>
            </div>
            </div>
    )
}