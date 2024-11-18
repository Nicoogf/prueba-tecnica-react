import Cards from "../components/Cards/Cards"
import Filters from "../components/Filters/Filters"


const Home = () => {
  return (
    <main>
        <h1 className="text-red-500 text-center my-5 text-3xl font-semibold"> Prueba Frontend </h1>

        <section className="grid grid-cols-12 bg-blue-300 w-[90%] mx-auto gap-2 ">
            
            <aside className="bg-blue-200 col-span-3">
                <Filters />
            </aside>

            <section className="bg-blue-200 col-span-9 grid grid-cols-12">
                <Cards />
                <Cards />
                <Cards />
            </section>

        </section>

    </main>
  )
}

export default Home