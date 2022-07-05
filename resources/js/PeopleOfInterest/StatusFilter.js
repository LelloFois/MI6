import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
 
export function StatusFilter({selectedStatus, setSelectedStatus}){

    const [statuses, setStatuses] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/statuses');
           setStatuses(response)
        } catch(error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
        
    }

    useEffect(()=>{
        fetchData();
       
    },[])




    return (
        <div className='status-filter'>
            {console.log(statuses)}
            Status Filter
        </div>
    )
}