var pastDate = "2021-02-15T15:22:09.222"
var future = "2023-04-23T15:02:09.345"

var currentDate = new Date(future)
console.log("curentDate",currentDate)
var year = currentDate.getFullYear()
var month = currentDate.getMonth()
var date = currentDate.getDate()
var hour = currentDate.getHours()
var minut = currentDate.getMinutes()
var time = currentDate.getTime()
var getDays = currentDate.getDay()
console.log("year",year)
console.log("month",month)
console.log("date",date)
console.log("hour",hour)
console.log("minut",minut)
console.log("time",time)
console.log("day",getDays)
var mont = ['jan','feb','mar','apr','may','june','july','aug']
console.log("months",mont[month])