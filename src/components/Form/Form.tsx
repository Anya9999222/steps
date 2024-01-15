import { FormEvent, useState } from "react"
import './Form.css'
import { Training } from "../../models/Training"

interface Props {
    onSubmit: (newTraining: Omit<Training, 'id'>) => void
}

const Form = ({onSubmit}: Props) => {

    const [training, setTraining] = useState({})

    const handleChange = (event) => {
        let value: string
        value = event.target.value
        setTraining(prev => ({
            ...prev,
            [event.target.name]: value
            
        }))
    }
    const updateTable = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit({
            ...training
        }as Omit<Training, 'id'>) 
        
    }

  return (
    <>
    <form className="form"  onSubmit={updateTable}>
        <div className="date">
            <span>Дата (ДД.ММ.ГГ)</span>
            <input 
                name="date" 
                type="date"
                onChange={handleChange} 
                className="input date_input">
            </input>
        </div>
        <div className="distance">
            <span>Пройдено км</span>
            <input 
                name="distance" 
                type="text"
                onChange={handleChange} 
                className="input">
            </input>
        </div>
        <button className="button">OK</button>
    </form>
    </>
  )
}

export default Form;