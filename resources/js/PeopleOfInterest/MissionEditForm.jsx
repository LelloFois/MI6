import { useEffect, useState} from 'react';
import axios from 'axios';


export default function MissionEditForm() {
    const [toggle, setToggle] = useState("form form-hidden")
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

    const handleForm = () => {
        toggle == 'form form-hidden' ?
        setToggle("form") :
        setToggle('form form-hidden')
        ;
    }

    return (
        <>
        <button onClick={ handleForm }>{toggle == 'form form-hidden' ? 'Edit Missions' : 'Close'}</button>
        <div className={ toggle }>
            
            
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
        </>
    )
}


     


