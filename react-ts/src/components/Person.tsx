import React, {useState, useContext} from 'react'
import { UserContext } from "../components/UserContextProvider"

// If you want to use it in another component, you export it.
export interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries
}

export const enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    UnitedStates = "United States"
}

export const User = (props: Props) => {
    const {users, addUser, updateUser, deleteUser} = useContext(UserContext);

    const [personBio, setPersonBio] = useState<string | null>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>This person {props.isMarried ? "is married" : "is single"}</p>
        
        <p>
          {props.name} Bio: {!personBio ? "No Bio available" : personBio}
        </p>
        <p>{props.country}</p>

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
        </form>
    </div>
  )
}