let img2Str = ()=>{
        //alert("Test Case 123!")
        let imageFile = document.getElementById('img').files[0];
        let reader=new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load',()=>{
            if(reader.result){
                //update span tag
                document.getElementById('spanmsg').innerHTML=reader.result;
                //document.getElementById('spanmsg').innerHTML="GE"
            }
        })
}