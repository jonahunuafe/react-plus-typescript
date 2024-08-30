import { createContext } from "react";

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
    

    return (
        <>
            {props.children}
        </>
    )
} 
