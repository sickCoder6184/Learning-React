import { useRouteError } from "react-router"

const Error=()=>{

    const err=useRouteError()
    console.log(err)
    return(
        <div>
            <h1>OOPS!!!!</h1>
            <h1>Page {err.statusText} Sorry Dev!!!</h1>
            <h1>{err.status}</h1>
        </div>
    )
}

export default Error