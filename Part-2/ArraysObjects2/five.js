let users=[{id:101,name:"Rahul",gender:"Male"},
           {id:102,name:"Sonai",gender:"Female"},
           {id:103,name:"Priyanka",gender:"Female"},
           {id:104,name:"Modi",gender:"Male"}
          ]

let i=0;
while(i<=users.length-1){
    if(users[i].gender ==='Female'){
        //console.log(`User Name: ${users[i].name} and Id: ${users[i].id}`)
          console.log("User Name:",users[i].name, " and Id:", users[i].id)
    }
 i++;   
}