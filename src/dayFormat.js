function dayFormat(inputDate){
    const month = inputDate.getMonth() +1
    const day = (inputDate.getDate() < 10)? "0" + inputDate.getDate() : inputDate.getDate()
    const year = inputDate.getFullYear()
    const hour = inputDate.getHours()
    const minute = (inputDate.getMinutes() < 10)? "0" + inputDate.getMinutes(): inputDate.getMinutes()
    if(hour < 13){
        return month + "/" + day + "/" + year + " " + hour + ":" + minute + " am"
    }
    else{
        return month + "/" + day + "/" + year + " " + (hour-12) + ":" + minute + " pm"
    }
}

export default dayFormat