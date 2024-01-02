import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)

const {id} = useParams()

const getPercentBarProgress = (stat_value) => {
  const percent = (stat_value * 100) / 255
  return percent + "%"
}

useEffect(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(({data})=> setPokemonInfo(data))
  .catch((err)=> console.log(err))
},[])

  return (
    <section className="p-2">
      <article className="text-center max-w-[500px] mx-auto">
        <header className="bg-gradient-to-b from-gray-500 to-gray-300 relative h-[140px]">
          <img className="absolute -bottom-4 translate-y-[15%] translate-x-[55%] w-60 p-12" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <span className="text-lg font-bold"># {pokemonInfo?.id}</span>
        <h3 className="capitalize text-lg font-bold pt-1 p-5 bg-gray-200">{pokemonInfo?.name}</h3>
        <div className="flex-col" >
          <div className="p-1 font-semibold bg-blue-200" >
            <h5 className="font-bold " >Weight</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div className="p-1 font-semibold bg-lime-200">
            <h5 className="font-bold">Height</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>
        <section>
          <h4 className="p-5 font-bold text-lg" >Stats</h4>
          <ul className="grid gap-3">
            {pokemonInfo?.stats.map((stat)=>(
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="capitalize">{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                {/* {Contenedor barra de progreso} */}
                <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                  {/* {Progreso sobre el total} */}
                  <div style={{
                    width: getPercentBarProgress(stat.base_stat)
                  }}className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"></div>
                </div>
              </li>
              ))}
              
          </ul>
        </section>
      </article>
    </section>
  )
}
export default PokemonDetail