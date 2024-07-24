class Account{
    deposit_Amount(){
        console.log("Deposited Successfully!")
    }
    get_Bal(){
        return 150000
    }
}
let a1=new Account()
console.log(a1.deposit_Amount())  //undefined 
console.log(a1.get_Bal())         //150000