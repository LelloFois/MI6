import { useEffect, useState} from 'react';
import axios from 'axios';


export default function MissionEditForm() {
    const [values, setValues] = useState({
        name: 'name',
        year: 'year',
        outcome: 'outcome'
    });
 
    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values, 
                [event.target.name]: event.target.value
            });
        });
    }

   

    const handleSubmit = (event) => {
        // prevent the default event behaviour
        event.preventDefault();

     axios.post('/submit', values);
       
    }

    return (

        <div className='form'>
            
            <form action="" method='POST' onSubmit={(e)=>{
                handleSubmit(e)}
            }>
                <input type="text" name="name" value={values.name} onChange={(e) => {
                handleChange(e)
                }} /><br />
                <input type="text" name="year" value={values.year} onChange={(e) => {
                handleChange(e)
                }}/><br />
                 <input type="text" name="outcome" value={values.outcome} onChange={(e) => {
                handleChange(e)
                }}/><br />
                <br/>
                <button>Submit</button>
     
            </form>
        </div>
    )
}


     


