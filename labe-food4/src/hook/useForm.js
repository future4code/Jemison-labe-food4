import {useState} from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const newValue = event.target.value;
        const name = event.target.name

        setForm({...form, [name]: newValue})
    }
    return [form , onChange]
}