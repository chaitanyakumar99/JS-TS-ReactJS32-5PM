let employees=[
    {eid:101,ename:'Rahul',sal:45000},
    {eid:102,ename:'Sonia',sal:55000},
    {eid:103,ename:'Priya',sal:65000},
    {eid:104,ename:'Modi',sal:75000},
    {eid:105,ename:'SR',sal:85000}
]

function display_EmployeeData(){
    //alert('Test Case 123')
    let rows=""
    for(emp of employees){
        rows = rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.sal}</td>
                    </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.querySelector('.table_Data_Class').innerHTML=rows
    //document.getElementById('table_Data').innerHTML=rows
    //document.getElementById('table_Data').innerHTML='GE'
}