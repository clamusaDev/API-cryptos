import axios from 'axios'
import React,  { useEffect, useState } from 'react'
import '../components/styles.css'

export const Cryptos = ()=> {
    
// 1 - setear los Hook

const [search, setSearch]=useState("")
const [crypto, setCrypto]=useState([])


// 2 - funcion para traer los datos
    const url = 'https://api.coingecko.com/api/v3/coins'

    const showData = () => {
        axios.get(url).then ((response) => {
            console.log((response.data))
            setCrypto(response.data)
        })
    }

    useEffect(()=>{
        showData()
    },[])


// 3 - funcion de busquedad
    const searcher = ((event) => {
        setSearch(event.target.value)
        console.log(setSearch(event.target.value))

    })


// 4 - filtrar los datos
    const results = !search ? crypto : crypto.filter((value)=> value.name.toLowerCase().includes(search.toLowerCase()))


// 5 - renderizamos la vista de la tabla

  return (
// fragment, luego buscar svg lupa para adjuntar en busquedad y probar
    <>
    
        <input value={search} onChange={searcher} type='text' placeholder='Search Cryptos...' className='mt-10 mb-10 px-3 cursor-pointer text-bold text-slate-500 font-bolt focus:outline-none' />

    <div className='bg-slate-400'>
        
        <table className='table'>
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price US $</th>
                    <th>Price 24h US $</th>
                </tr>
            </thead>

            <tbody>
                {
                    results.map((result) => (
                        <tr key={result.id}>
                            <td>{result.market_data.market_cap_rank}</td>
                            <td className='flex items-center py-4'><img src={result.image.small} alt='cryptos icons' /><span className='ml-4'>{result.name}</span></td>
                            <td>{result.symbol.toUpperCase()}</td>
                            <td>{result.market_data.current_price.bmd.toFixed(2)}</td>
                            <td>
                                {
                                    result.market_data.price_change_percentage_24h < 0 
                                    ? (<span className='bg-red-600 px-4 py-1 rounded-2xl text-white' >{result.market_data.price_change_percentage_24h}</span>)
                                    :(<span className='bg-green-500 px-4 py-1 rounded-2xl text-black' >{result.market_data.price_change_percentage_24h}</span>)
                                }
                            </td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )
}