

const Paginations = ({setPageNumber , pageNumber}) => {
    let next = () => {
        setPageNumber( (x) => x + 1 )
    }
    let prev = () => {
        if( pageNumber === 1) return
        setPageNumber( (x) => x - 1 )
    }
    return (
        <nav className="w-[90%] max-w-[720px] mx-auto bg-red-500 p-2 my-5 flex flex-row justify-between">
            <button onClick={prev}
            className="bg-blue-500 text-white font-semibold px-6 py-1">
            Prev
            </button>

            <button onClick={next}
            className="bg-blue-500 text-white font-semibold px-6 py-1">
            Next
            </button>
        </nav>
    )
}

export default Paginations