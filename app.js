


const form = document.form
const url = "https://api.vschool.io/sheltz/todo"
// https://pixabay.com/photos/flag-sea-turkey-foca-kusadasi-1244648/

const getData = async ()=>{
    const res = await axios.get(url)
    try {
        const data = res.data
        console.log(data)
        //looping over data
        for(let i =0; i < data.length; i++){
            const todo = data[i]
            //title element created and appeded
            const title = document.createElement("h1")
            title.textContent = todo.title
            document.body.appendChild(title)
            //id element created and appeded
            const _ids = document.createElement("button")
            _ids.textContent = todo._id
            document.body.appendChild(_ids)
            //description element created and appeded
            const description = document.createElement("h2")
            description.textContent = todo.description
            document.body.appendChild(description)
            //title element created and appeded
            const price = document.createElement("h6")
            price.textContent = todo.price
            document.body.appendChild(price)
            //title element created and appeded
            const photo = document.createElement("img")
            photo.textContent = todo.photo
            document.body.appendChild(photo)
            //title element created and appeded
            const completed = document.createElement("p")
            completed.textContent = todo.completed
            document.body.appendChild(completed)






            //delete todos
            _ids.addEventListener("click", e =>{
                if(_ids){
                    const deleteId = data[i]._id
                    console.log(deleteId)
                    axios.delete(`${url}/${deleteId}`)
                    try {
                        alert("yes")
                    } catch (error) {
                        console.log(error)
                    }
                }
          
            })
        }
    } catch (error) {
        
    }
}
form.addEventListener("submit", e =>{
    e.preventDefault()
  const newTodo = { title : form.title.value,
    description : form.description.value,
    price : form.price.value,
    imgUrl : form.imgUrl.value}
    console.log(newTodo)     
    
    axios.post(url, newTodo)
    try {
        console.log("you did it")
    } catch (error) {
        console.log("fail")
    }
})


getData()