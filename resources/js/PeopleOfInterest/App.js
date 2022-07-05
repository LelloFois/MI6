import { useEffect, useState} from 'react';
import  {StatusFilter} from 'StatusFilter';
imp


const App = () => {

    const [data, setData] = useState(null);
    const [request, setRequest] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    const fetchData = async () => {
        const response = await fetch('/api/people_of_interest');
        const parsedResponse = await response.json();
        setData(parsedResponse)

    }

    const fetchSearch = async (request) => {
        const response = await fetch (`/api/?search=${request}`);
        const searchedData = await response.json();
        // console.log(searchedData)
        setRequest(searchedData);
    }

    useEffect(()=>{
        fetchData();
        fetchSearch();
    },[])

    const onChangeHandler = (text) => {
   
        let matches = [];
        if (text.length > 0) {
            matches = data.filter(name => {
                const regex = new RegExp(`${text}`, "gi");
                return name.name.match(regex)
            } )
        }
         console.log(matches);
        setData(matches);
        
      }

   
    return( 
        data == null ?
        <h1>Loading...</h1>
        :
          
        <div className="content">
            <input type={'text'} placeholder={'Search...'} onChange={e => onChangeHandler(e.target.value)} />

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
        <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
        </div>
    ) 
    }

export default App;