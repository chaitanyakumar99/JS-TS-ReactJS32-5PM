class Account{
    acc_Id=101;
    acc_Name="Rahul Gandhi"
    acc_Bal=1500;
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl(){
        console.log("Insuffient Bal!")
    }
}

let a1=new Account()
console.log(a1)