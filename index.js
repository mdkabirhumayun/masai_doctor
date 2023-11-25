// fill in javascript code here
let myForm = document.querySelector('form')
let eName=document.getElementById('name')
let tbody=document.querySelector('tbody')
let empId=document.getElementById('doctor_id')
let eDep=document.getElementById('specialization');
let eExp=document.getElementById('experience')

let eEmail=document.getElementById('email')
let eMob=document.getElementById('mobile')

let AllData=[];
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let Data={};
    Data.input1=eName.value;
    Data.input2=empId.value;
    Data.input3=eDep.value;
    Data.input4=eExp.value;
    Data.input5=eEmail.value;
    Data.input6=eMob.value;
  
    if(eExp.value>=5){
        Data.input7="Senior"
    }
    else if(eExp.value<5 && eExp.value>1){
        Data.input7="Junior"
        
    }
    else if(eExp.value<=1){
        Data.input7="Trainee"
        
    }
    

    // console.log(Data);
    AllData.push(Data);
    tbody.innerHTML=null;
    AllData.map((ele)=>{
        let row = document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        let td6=document.createElement('td');
        let td7=document.createElement('td');
        //let td8=document.createElement('td');
        // creat button giv function to it

       let button=document.createElement('button')
       button.textContent='Delete';
      
       button.onclick=function(){
       row.remove();
       }
       let buttonCell=document.createElement('td');
       buttonCell.appendChild(button);
        td1.innerText=ele.input1
        td2.innerText=ele.input2
        td3.innerText=ele.input3
        td4.innerText=ele.input4
        td5.innerText=ele.input5
        td6.innerText=ele.input6
        td7.innerText=ele.input7
        row.append(td1,td2,td3,td4,td5,td6,td7,buttonCell);
        tbody.append(row);
       
    })


    
})


function filterDoctor() {
  var selectedDepartment = document.getElementById("filter").value;
  var doctorList = document.querySelectorAll(td1).value

  for (var i = 0; i < doctorList.length; i++) {
    var department = doctorList[i].getAttribute("valeu");

    if (selectedDepartment === "all" || department === selectedDepartment) {
      doctorList[i].style.display = "block";
    } else {
      doctorList[i].style.display = "none";
    }
  }
}

