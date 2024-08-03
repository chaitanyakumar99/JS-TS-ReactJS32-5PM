class Account{
  /*   acc_Id;
    acc_Name;
    acc_Bal; */
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let a1=new Account(101,'Rahul',5000)
let a2=new Account(102,'Sonia',15000)

a1.deposit_Amount(150)
a1.withdrawl(15)
console.log(a1.get_Bal())

a2.deposit_Amount(4000)
a2.deposit_Amount(2000)
console.log(a2.get_Bal())