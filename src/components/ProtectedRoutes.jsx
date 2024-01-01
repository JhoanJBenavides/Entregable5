import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const trainerName = useSelector((store) => store.trainerName.name)
    

    if(trainerName !== ""){
    //? Le permimitimos ver el componente correspondiente
    return <Outlet />
    } else {
    //? Lo vamos a redireccionar al home
    return <Navigate to="/" />
    }
}
export default ProtectedRoutes