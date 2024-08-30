import { createContext, useEffect, useState } from "react";

export interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    deleteUser:(id: number) => void;
    updateUser: (id: number) => void;
}

const contextInitialValues = {
    users: null,
    addUser: () => null,
    deleteUser: () => null,
    updateUser: () => null,
}

const UserContext = createContext<UserContextType>(contextInitialValues)

interface Props {
    children: React.ReactNode
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null)

    useEffect(() => {
        // setUsers([{name: "Fejiro", age: 39, isMarried: true}])
    }, [])

    const addUser =  (user: User) => null;
    const updateUser = (id: number) => null;
    const deleteUser = (id: number) => null;


    return (
        <UserContext.Provider value = {{users, addUser, updateUser, deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )
} 
