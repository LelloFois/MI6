import { useEffect, useState} from 'react';
import  { StatusFilter } from './StatusFilter';
import  MissionEditForm from './MissionEditForm'; 




const App = () => {

    const [data, setData] = useState(null);
    const [request, setRequest] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    const fetchData = async () => {
        const response = await fetch('api/people_of_interest' + '?status=' + encodeURIComponent(selectedStatus));
        const parsedResponse = await response.json();
        // console.log('api/people-of-interest' + '&status=' + encodeURIComponent(selected_status));
        // console.log(parsedRespose);
        setData(parsedResponse);
    }

    const fetchSearch = async (request) => {
        const response = await fetch (`/api/search?search=${request}`);
        const searchedData = await response.json();
        console.log(searchedData)
        setData(searchedData);
    }

    useEffect(()=>{
        fetchData();
        fetchSearch();
    },[selectedStatus])

    const onChangeHandler = (text) => {

        setRequest(text);
        fetchSearch(text);
      }

   
    return( 
        
        data == null ?
        <h1>Loading...</h1>
        :
          
        <div className="content">
            <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            <input type={'text'} placeholder={'Search...'} onChange={e => onChangeHandler(e.target.value)} value={request} />
             <MissionEditForm /> 
             
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

        <div>
            
           
        </div>

        </div>
    ) 
    }

export default App;