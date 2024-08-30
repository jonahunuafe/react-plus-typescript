import React, {useState} from 'react'

// If you want to use it in another component, you export it.
export interface Props {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Props) => {
    const [personBio, setPersonBio] = useState<string | null>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>This person {props.isMarried ? "is married" : "is single"}</p>
        
        <p>
          {props.name} Bio: {!personBio ? "No Bio available" : personBio}
        </p>

        <input onChange={handleChange} />
    </div>
  )
}