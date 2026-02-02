import { Outlet }  from "react-router-dom"
import ManagerSidebar from './ManagerSidebar'

const ManagerLayout = () => {
    return (
        <div className="min-h-screen flex">
            <ManagerSidebar />
            <Outlet />
        </div>
    )
}

export default ManagerLayout;