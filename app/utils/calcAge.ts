export const calcAge = (dateEntered: string[]) => {

	const today = new Date();    
	const age = []
 
    let by:number = Number.parseFloat(dateEntered[2]),
		bm:number = Number.parseFloat(dateEntered[1]),
		bd:number = Number.parseFloat(dateEntered[0]),
		ty:number = today.getFullYear(),
		tm:number = today.getMonth() + 1,
		td:number = today.getDate();
        let days: number, months: number, years: number;
	if (td < bd) {
		days = td - bd + 30;
		tm = tm - 1;
	} else days = td - bd; 
	if (tm < bm) {
		months = tm - bm + 12;
		ty = ty - 1;
	} else months = tm - bm;
    
	years = ty - by;
    age.push(years, months, days);
    
 return(age)
}