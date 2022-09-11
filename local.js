
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
    reload()
})

document.getElementById('delete-btn-all').addEventListener('click', function(){
    localStorage.clear()
    reload()

})

//display data 

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
    `;});}}
    
displayData()

//remove item one by one from the array
document.getElementById('remove-last-button').addEventListener('click', function(){
    const student = JSON.parse(localStorage.getItem('studentInfo'))
    student.pop()
    localStorage.setItem('studentInfo', JSON.stringify(student))
      reload()
})

// search data in a table (its not working in this local storage ..... need some extra work to activate it )
// document.getElementById('inputGroup-sizing-lg').addEventListener('click', function(){
//     console.log('cat')
//     const searchFieldValue = document.getElementById('search-field').value.toUpperCase()
//     const table = document.getElementById('table')
//     const tr = table.getElementsByTagName('tr')
//     for(let i = 0; i < tr.length; i++){
//         let td = tr[i].getElementsByTagName('td')[0];
//         if(td){
//             let textValue = td.textContent || td.innerHTML;
//             if(textValue.toUpperCase().indexOf(searchFieldValue)>-1){
//                 tr[i].style.display = '';
//             } else{
//                 tr[i].style.display = 'none';
//             }
//         }
//     }

// })




// New Search 
document.getElementById("search-button").addEventListener("click", function () {
    const inputField = document.getElementById("search-field").value.toLowerCase();
    const data = JSON.parse(localStorage.getItem('studentInfo'))
    let results = []
    for(let i=0; i<data.length; i++) {
        for(key in data[i]) {
          if(data[i][key].toLowerCase().indexOf(inputField)!=-1) {
            results.push(data[i]);
            const dataContainer = document.getElementById('tbody2')
        // dataContainer.innerHTML = ''
        if(inputField !== ''){
            dataContainer.innerHTML += `
            <tr>
                <td>${results[0].fname}</td>
                <td>${results[0].lname}</td>
                <td>${results[0].age}</td>
            </tr>
        `; }}}}});

function reload(){
    location.reload()
}