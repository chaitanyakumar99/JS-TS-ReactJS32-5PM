class User{
    current_Year=2024
    cal_Age(year){
        return this.current_Year - year;
    }
}
let u1=new User();
let u2=new User();
let age1=u1.cal_Age(1983)
console.log(age1)