
// store data in local storage 
const storeData = (key, id) =>{
    const value = document.getElementById(id).value
    document.getElementById(id).value =''
  if(typeof(value)==='string'){
    const setData = localStorage.setItem(`${key}`, value) 
  }
  else{
    const setData = localStorage.setItem(`${key}`, JSON.stringify(value)) 
    }
   
}

// retrive data from local storage 
const getData = (key) =>{
    const getData = localStorage.getItem(`${key}`) 
    // console.log(getData)
    return getData
}

// remove data from local storage 
const removeData = (key) =>{
    const removeData = localStorage.removeItem(`${key}`) 
}

//add f name on click
document.getElementById('add-fname-button').addEventListener('click', function(){
    storeData('First Name', 'first-name' )
})
//remove fname onclick
document.getElementById('remove-fname-button').addEventListener('click', function(){
    removeData('First Name')
})

// add last name onclick 
document.getElementById('add-lname-button').addEventListener('click', function(){
    storeData('Last Name', 'last-name' )
})
// remove last name onclick 
document.getElementById('remove-lname-button').addEventListener('click', function(){
    removeData('Last Name')
})

// add age onclick 
document.getElementById('add-age-button').addEventListener('click', function(){
    storeData('Age', 'age' )
})
// remove age onclick 
document.getElementById('remove-age-button').addEventListener('click', function(){
    removeData('Age')
})


// Add all data as object by clicking add All as object button 
document.getElementById('add-button-all').addEventListener('click', function(){
    const storedData = JSON.parse(localStorage.getItem('studentInfo'))
    console.log(storedData)
    if(storedData === null){
        const formData = [{
            fname: document.getElementById('first-name').value,
            lname: document.getElementById('last-name').value,
            age: document.getElementById('age').value,
        }]
        localStorage.setItem('studentInfo', JSON.stringify(formData))
    }
    else{
        const formData = 
        [
            ...storedData,
            {
            fname: document.getElementById('first-name').value,
            lname: document.getElementById('last-name').value,
            age: document.getElementById('age').value,
            }
        ]
        localStorage.setItem('studentInfo', JSON.stringify(formData))
        
    }
    displayData()
    location.reload()
})

document.getElementById('delete-btn-all').addEventListener('click', function(){
    localStorage.clear()
    location.reload()

})

//display data 
// console.log(JSON.parse(getData('studentInfo'))[0].age)
const displayData = ()=>{
    const studentInformation = JSON.parse(localStorage.getItem('studentInfo'))
    if(studentInformation){
        const dataContainer = document.getElementById('tbody')
        dataContainer.innerHTML = ''
        studentInformation.forEach(student => {
        dataContainer.innerHTML += `
        <tr>
            <td>${student.fname}</td>
            <td>${student.lname}</td>
            <td>${student.age}</td>
        </tr>
    `;
    
        });
    }
}
displayData()

//remove item one by one from the array
document.getElementById('remove-last-button').addEventListener('click', function(){
    const student = JSON.parse(localStorage.getItem('studentInfo'))
    student.pop()
    localStorage.setItem('studentInfo', JSON.stringify(student))
      location.reload()
})
