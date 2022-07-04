import { useEffect, useState} from 'react';


const App = () => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await fetch('/api/people_of_interest');
        const parsedResponse = await response.json();
        setData(parsedResponse)

    }

    useEffect(()=>{
        fetchData();
    },[])

    console.log(data)
    return( 
        data == null ?
        <h1>Loading...</h1>
        :

        <div className="content">

            {data.map((person) => {
                return(
                <>
                    <p>{person.name} is {person.occupation}</p>
                    <p>Known Aliases:</p>
                    <ul>
                        {person.aliases.map((alias) => {
                            return <li>{alias.alias}</li>
                           
                        })}
                    </ul>
                    
                </>
                )
            })}
        
        </div>
    ) 
    }

export default App;