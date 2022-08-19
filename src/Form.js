
import { useForm } from "./useForm";

export function Form(){

    const [values, handleChange] = useForm({email: '', password: ''})
    return(
        <div>
            <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            />
        </div>
    )
}