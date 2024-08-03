class Account{
    min_Bal=500;
    acc_Bal=0;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount
    }
}
let a1=new Account();
a1.deposit_Amount(15000)
a1.deposit_Amount(15)
console.log(a1)

let a2=new Account();
a2.deposit_Amount(50)
console.log(a2)