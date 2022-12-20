function date() {var time = new Date()
document.querySelector(".day span").innerHTML=time.getDate()
document.querySelector(".month span").innerHTML=time.getMonth()+1
document.querySelector(".year span").innerHTML=time.getFullYear()
document.querySelector(".hour span").innerHTML=time.getHours()
document.querySelector(".min span").innerHTML=`${time.getMinutes()<10?"0":""}${time.getMinutes()}`
document.querySelector(".sec span").innerHTML=`${time.getSeconds()<10?"0":""}${time.getSeconds()}`}
date()
setInterval(date,1000)










var val=false
var text=val?"Salam":"sagol"
console.log(text)