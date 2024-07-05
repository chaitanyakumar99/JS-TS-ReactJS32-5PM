let input=require('prompt-sync')()
let num = parseInt(input("Enter Number:"))

if(num >=100 && num<=999){
    console.log("Yes!Given Number is 3 digit no")
}else{
    console.log("Given Number is Not a 3 digit no")
}