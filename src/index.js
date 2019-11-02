document.addEventListener("DOMContentLoaded", function () {
  // your code here
one()

});


function one(){
  //grab the form
  const form = document.getElementById("create-task-form")
  const value = document.getElementById("new-task-description")
  const submit = document.getElementById("button")


  
  //on the click of submit for we want an event listener that>>
    //prevents default
    submit.addEventListener("click",function(event){
      console.log(value.value)
      let l = document.createElement('h1')
      l.innerHTML= value.value
      document.body.appendChild(l)

      event.preventDefault();
      
      
    })
    //appends the input to html

}