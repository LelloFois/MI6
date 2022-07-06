import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
 
export function StatusFilter({selectedStatus, setSelectedStatus}){

    const [statuses, setStatuses] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/statuses');
           setStatuses(response.data)
        } catch(error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
        
    }

    useEffect(()=>{
        fetchData();
       
    },[])

    // const handleClick = (e) => {
    //     // e.preventDefault();
    //     console.log(e)
    //     setSelectedStatus(e.target.getAttribute("data-status"))
    // }
    

    return (
        <div className='status-filter'>
            {
                statuses.map((status, i) => {
                    console.log(status)
                    return (<button className={"status-filter__status" + selectedStatus == status.id ? "status-filter__status" : ''} data-status={status.id} onClick={()=>setSelectedStatus(status.id)} key={i}>{status.name}</button>)
            })
            }
        </div>
    )
}

// key={i} class={"status-filter__status" + selectedStatus == status.id ? "status-filter__status" : ''} data-status={status.id} 