let state={
    p_Id:'p101',
    p_Name:"Iphone 5s",
    user:{
        uid:101,
        uName:"Rahul Gandhi"
    },
    emp:{},
    loc:['Wayanad','New Delhi']
}
let {p_Name}  = state;
console.log(p_Name) 
/*If you want read object property like a variable
  destructure your object.
  improve the code readability.
  searching is easy
*/