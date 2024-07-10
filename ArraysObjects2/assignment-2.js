let users=[{"id":1,"name":"Harlie","gender":"Female"},
    {"id":2,"name":"Adora","gender":"Female"},
    {"id":3,"name":"Gale","gender":"Female"},
    {"id":4,"name":"Antin","gender":"Agender"},
    {"id":5,"name":"Blaire","gender":"Female"},
    {"id":6,"name":"Ray","gender":"Male"},
    {"id":7,"name":"Cecilla","gender":"Female"},
    {"id":8,"name":"Idalina","gender":"Female"},
    {"id":9,"name":"Rubetta","gender":"Female"},
    {"id":10,"name":"Maxwell","gender":"Male"},
    {"id":11,"name":"Erhard","gender":"Male"},
    {"id":12,"name":"Nanette","gender":"Genderqueer"},
    {"id":13,"name":"Charissa","gender":"Female"},
    {"id":14,"name":"Renata","gender":"Female"},
    {"id":15,"name":"Tammi","gender":"Female"},
    {"id":16,"name":"Tamma","gender":"Female"},
    {"id":17,"name":"Temple","gender":"Male"},
    {"id":18,"name":"Teador","gender":"Genderqueer"},
    {"id":19,"name":"Britteny","gender":"Female"},
    {"id":20,"name":"Ralf","gender":"Male"},
    {"id":21,"name":"Fin","gender":"Male"},
    {"id":22,"name":"Joyous","gender":"Female"},
    {"id":23,"name":"Dora","gender":"Female"},
    {"id":24,"name":"Calida","gender":"Female"},
    {"id":25,"name":"Ceil","gender":"Female"},
    {"id":26,"name":"Harper","gender":"Male"},
    {"id":27,"name":"Marlane","gender":"Genderfluid"},
    {"id":28,"name":"Sanders","gender":"Male"},
    {"id":29,"name":"Joann","gender":"Female"},
    {"id":30,"name":"Richmond","gender":"Male"}]

let no_Of_Male_Users=0;
let no_Of_Feale_Users=0;
for( user of users){
    if(user.gender ==='Female'){
        no_Of_Feale_Users++;
    }
    else
    if(user.gender ==='Male'){
        no_Of_Male_Users++
    }
}
console.log("No of Male Users",no_Of_Male_Users)
console.log("No of Female Users",no_Of_Feale_Users)