import {Outlet} from "react-router-dom";

const Users = () => {
    return (
        <div>
            <h1>Users Page</h1>
            <Outlet/>
        </div>
    );
};

export default Users;