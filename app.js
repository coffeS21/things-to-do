const form = document.form
const url = "https://api.vschool.io/sheltz/todo"

const getData = async ()=>{
    
    const res = await axios.get(url)
    try {
        const data = res.data
        console.log(data)

        for(let i =0; i < data.length; i++){
            const todo = data[i]

            //title element created and appeded
            const title = document.createElement("h1")
            title.textContent = todo.title
            document.body.appendChild(title)
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
        }
    } catch (error) {
        
    }
}
getData()