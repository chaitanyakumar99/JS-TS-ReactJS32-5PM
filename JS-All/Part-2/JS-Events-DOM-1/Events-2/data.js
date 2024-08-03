document.getElementById('abc').innerHTML ="Good Evening"


function change_Color1(){
    //alert('Test')
    //document.getElementById('xyz1').innerHTML="Test Case123"
    document.getElementsByTagName('button')[0].style.backgroundColor='yellow'
}
function change_Color2(){
    let ref=document.querySelector('.xyz2')
    ref.style.backgroundColor='yellow'
}
function change_Color3(){
    document.getElementById('xyz3').style.backgroundColor='yellow'
}
function change_textCase(){
   let name=document.getElementById('xyz4').value;
   //alert(name.toUpperCase())
   document.getElementById('xyz4').value=name.toUpperCase()
}

function chage_btn_Name(){
    document.getElementsByTagName('button')[0].innerHTML="Multiple Events"
}