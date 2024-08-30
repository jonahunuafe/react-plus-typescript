import React, {useState} from 'react'

// If you want to use it in another component, you export it.
export interface Props {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Props) => {
    const [personBio, setPersonBio] = useState<string | null>("")
    

  return (
    <div>
        {showInfo && (
            <>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>This person {props.isMarried ? "is married" : "is single"}</p>
            </>
        )}
        <p>
          {props.name} Bio: {!personBio ? "No Bio available" : personBio}
        </p>

        <input />
    </div>
  )
}