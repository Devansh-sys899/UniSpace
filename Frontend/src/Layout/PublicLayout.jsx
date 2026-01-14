import { Outlet }  from "react-router-dom";

const PublicLayout = () => {
    return (
        <div>
            <h2>OwnerLayout</h2>
            <Outlet />
        </div>
    )
}

export default PublicLayout;