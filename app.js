const form = document.form
const massDelete = document.form.massDelete
const url = "https://api.vschool.io/sheltz/todo"
const listContainer = document.getElementById("todoContainer")
// https://pixabay.com/photos/flag-sea-turkey-foca-kusadasi-1244648/
const getData = async ()=>{
    const response = await axios.get(url)
    const data = response.data
    try {
        displayData(data)
        console.log(data)
        } catch (error) {
            console.log("no")
        }
    }

const displayData = task =>{
    clearTask()
    for(let i =0; i < task.length; i++){

        //title element created and appeded
        const title = document.createElement("h1")
        title.textContent = task[i].title
        listContainer.appendChild(title)

        //description element created and appeded
        const description = document.createElement("h2")
        description.textContent = task[i].description
        listContainer.appendChild(description)
        
        //img element created and appended
        const photo = document.createElement("img")
        photo.textContent = task[i].imgUrl
        listContainer.appendChild(photo)
        
        //id element created and appended
        const _ids = document.createElement("button")
        _ids.textContent = "click to delete task"
        listContainer.appendChild(_ids)
    
        //task completed or not element created and appened
        const completedTask = document.createElement("input")
        completedTask.setAttribute("type", "checkbox")
        listContainer.appendChild(completedTask)
        console.log(completedTask.checked)        
        //price element created and appended
        const price = document.createElement("caption")
        price.textContent = task[i].price
        listContainer.appendChild(price)

            //delete task on click
            _ids.addEventListener("click", ()=>{
                const deletedId = task[i]._id
                console.log(deletedId)
                if(deletedId){
                    console.log("closer")
                    axios.delete(`${url}/${deletedId}`)
                    try {
                         alert("task deleted")
                            clearTask()
                            getData()
                    }
                    catch (error) {
                        console.log("no")
                    }  
                }
            })
             //mass delete
             massDelete.addEventListener("click", e =>{
                if(completedTask.checked){
                    console.log("got it checked")
                    const deletedId = task[i]._id
                    console.log(deletedId)
                    if(deletedId){
                    console.log("closer")
                    axios.delete(`${url}/${deletedId}`)
                    try {
                         alert("task deleted")
                            clearTask()
                            getData()
                    }
                    catch (error) {
                        console.log("no")
                    }  
                }

                }else{
                    console.log("nopppppppeee")
                }
             })
             
    }
}


const clearTask = ()=>{
    const list = document.getElementById("todoContainer")
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}
getData()
//create a new todo
    form.addEventListener("submit", () =>{
        
        const newTodo = { 
            title : form.title.value,
            description : form.description.value,
            price : form.price.value,
            imgUrl : form.imgUrl.value
        }
        form.title.value = ""
        form.description.value = ""
        form.price.value = ""
        form.title.value = ""
        
        axios.post(url, newTodo)
        try {
            getData()
        } catch (error) {
            console.log("fail")   
        }
    })
