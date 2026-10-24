import React , {useState , useEffect} from "react"
import "./App.css"


// api url = "https://rickandmortyapi.com/api/character"

function App(){

const [desenho , setDesenho] = useState([])

useEffect(()=> {

 function loadApi(){

    let url = "https://rickandmortyapi.com/api/character"

    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
      console.log(json.results)
      setDesenho(json.results)
    })
    .catch((error)=>{
      console.log("Não foi possível carregar essa API")
    })

 }
   loadApi()
} , [])


  return(
    <div className="container">
       
        <header>

      <h1>Consumo de Api</h1>

      <div className="nav">

        <a>Home</a>
        <a>Favoritos</a>
        <a>Sair</a>

      </div>

        </header>

          {desenho.map((item)=>{
            return(
              <div key = {item.id} className="card">
               <img src = {item.image}/>
               <h3>Nome: {item.name}</h3>
               <hr></hr>
               <p>{item.status}</p>
               <p>{item.species}</p>
               <p>{item.created}</p>

                </div>
            )
          })}
      

    </div>
  )
}

export default App; 