employee={}

function add(){
    if(floatingInputId.value&&floatingInputName.value&&floatingInputDesignation.value&&floatingInputSalary.value){
        // alert("all inputs are present")
        employee.id=floatingInputId.value
        employee.name=floatingInputName.value
        employee.desg=floatingInputDesignation.value
        employee.salary=floatingInputSalary.value
        console.log(employee);
        //permanently store employee
        localStorage.setItem("employee",JSON.stringify(employee))
        //redirect to show.html
        window.location="show.html"
    }
    else{
        alert("enter valid input")
    }
}
//get content from local storage
if(localStorage.getItem("employee")){
    var displayData=JSON.parse(localStorage.getItem("employee"))
    console.log(displayData);
    display.innerHTML=`
    <div class="card shadow" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${displayData.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">ID:${displayData.id}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">Designation:${displayData.desg}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary">salary:${displayData.salary}</h6>

     
    </div>
  </div>
  `
}
else{
    display.innerText= `<h1 class="text-center text-danger">Nothing to display</h1>`
}

function back(){
    window.location="index.html"
}