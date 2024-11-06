import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Home(){

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   

    return(<>
            <h1>Façam a home</h1>
        </>)
}