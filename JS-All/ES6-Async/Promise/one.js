let goToGoa= (success,failure)=>{

    let acc_Bal=50000;
    if(acc_Bal > 15000){
        success("Go and Enjoy")
    }else{
        failure("Go to PG! - Open thinkpad and Practice JS")
    }
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})