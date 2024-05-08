const DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24;
function GetDaysBeteewnDates(dateText1 , dateText2){
    const data1 = new Date(dateText1);
    const data2 = new Date(dateText2);
    const diffTime = math.abs(data2=data1);
    const diffDays = Math.cell(diffTime / DAY_IN_MILISECONDS);
    return diffDays
}
let days = GetDaysBeteewnDates("05/08/2024" , "06/08/2024");
console.log("nr.zile",days);