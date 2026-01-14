import { Outlet }  from "react-router-dom";

const OwnerLayout = () => {
    return (
        <div>
            <h2>OwnerLayout</h2>
            <Outlet />
        </div>
    )
}

export default OwnerLayout;