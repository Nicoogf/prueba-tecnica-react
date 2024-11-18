import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards"
import Filters from "../components/Filters/Filters"


const Home = () => {

    const [pageNumber, setPageNumber] = useState(1)
    const [fetchData, setFetchData] = useState([])


    const api_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(() => {
        async function fetchCharacters(){
            try {
                let data = await fetch(api_url).then((res) => res.json());
                setFetchData(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchCharacters()
    }, [api_url])


    return (
        <main>
            <h1 className="text-red-500 text-center my-5 text-3xl font-semibold"> Prueba Frontend </h1>

            <section className="grid grid-cols-12 bg-blue-300 w-[90%] mx-auto gap-2 ">

                <aside className="bg-blue-200 col-span-3">
                    <Filters />
                </aside>

                <section className="bg-blue-200 col-span-9">
                    <Cards results={fetchData}/>
                </section>

            </section>

        </main>
    )
}

export default Home