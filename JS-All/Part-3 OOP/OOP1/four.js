class Account{
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl(){
        console.log("Insuffient Bal!")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    close_Account(){
        console.log("Pay more! - negative Bal")
    }
}
let a1= new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()