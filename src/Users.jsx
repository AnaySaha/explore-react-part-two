import { useEffect, useState } from "react"

export default function Users(){
    const [Users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res.json())
        .then (res=> res.json())
        .then(data =>setUsers(data))
    }, [])

    return (
        <div>

        </div>
    )
}



// 1. declare a state to hold the data
// 2. useEffect with call back and dependency array
// * use fetch data