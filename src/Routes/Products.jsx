import {NavLink, Outlet} from "react-router-dom";


const Products = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <nav>
                <NavLink className={'mx-2'} to='featured'>Featured</NavLink>
                <NavLink className={'mx-2'} to='new'>New</NavLink>
            </nav>

            <Outlet/>
        </div>
    );
};

export default Products;