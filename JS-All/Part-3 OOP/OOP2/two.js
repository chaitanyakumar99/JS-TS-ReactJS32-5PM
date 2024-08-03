class Account{
    acc_Bal = 0;
    min_Bal=500;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        console.log(this.acc_Bal - this.min_Bal)
    }
}
let rg=new Account();
rg.deposit_Amount(15000)
let pg=new Account();
pg.deposit_Amount(50000); 

console.log(rg)
console.log(pg)

rg.get_Bal()
pg.get_Bal()