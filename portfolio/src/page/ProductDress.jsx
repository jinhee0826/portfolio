import { Outlet } from "react-router";
import ProductCard from "../components/ProductCard";

const ProductDress = () => {
    return (  
        <div>
            <ProductCard />
            <Outlet />
        </div>
    );
}

export default ProductDress;