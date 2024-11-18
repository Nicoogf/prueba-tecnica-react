

// const Cards = ({results}) => {

//     let display;
//     if (results && results.length > 0) {
//       display = results.map((character) => {
//         return (
//           <article key={character.id} className="relative bg-white p-2 m-2 shadow col-span-4">
           
//             <picture >
//                 <img src={character.image} className="rounded-lg"/>
//             </picture>
//             <div>
//             <h2 className="font-semibold text-lg">{character.name}</h2>
//                 <p className="text-sm">Last location</p>
//                 <p> {character.location.name} </p>
//             </div>

//             { () =>{""
//                 if(character.status === "Dead"){
//                     return(
//                     <div className="absolute bg-red-500 p-1 text-white top-2 right-2 rounded-md">
//                         { character.status }
//                     </div>
//                     )
//                 }else if(character.status === "Alive"){
//                     return(
//                         <div className="absolute bg-green-500 p-1 text-white top-2 right-2 rounded-md">
//                             { character.status }
//                         </div>
//                         )
//                 }else{
//                     return(
//                         <div className="absolute bg-gray-500 p-1 text-white top-2 right-2 rounded-md">
//                             { character.status }
//                         </div>
//                     )
//                 }
//             }}
           
//           </article>
//         );
//       });
//     } else {
//       display = <p>No se encontraron resultados</p>;
//     }


//     return (
//         <section className="bg-blue-400 col-span-12 grid grid-cols-12">
//             {display}
//         </section>
//     )
// }

// export default Cards

const Cards = ({ results }) => {
    let display;
    if (results && results.length > 0) {
      display = results.map((character) => {
        return (
          <article
            key={character.id}
            className="relative bg-white p-2 m-2 shadow col-span-4"
          >
            <picture>
              <img src={character.image} className="rounded-lg" alt={character.name} />
            </picture>
            <div>
              <h2 className="font-semibold text-lg">{character.name}</h2>
              <p className="text-sm">Last location</p>
              <p>{character.location.name}</p>
            </div>
  
            
            <div
              className={`absolute p-1 text-white top-2 right-2 rounded-md ${
                character.status === "Dead"
                  ? "bg-red-500"
                  : character.status === "Alive"
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
            >
              {character.status}
            </div>
          </article>
        );
      });
    } else {
      display = <p>No se encontraron resultados</p>;
    }
  
    return (
      <section className="bg-blue-400 col-span-12 grid grid-cols-12">
        {display}
      </section>
    );
  };
  
  export default Cards;
  