class Account{
    acc_Bal = 0;
    min_Bal=500;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
      return this.acc_Bal - this.min_Bal;
    }
}
let rg=new Account();
rg.deposit_Amount(15000)

let pg=new Account();
pg.deposit_Amount(50000); 

let bal1=rg.get_Bal()
console.log(bal1)

let bal2=pg.get_Bal()
console.log(bal2)