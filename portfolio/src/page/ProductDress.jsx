import { useContext } from "react";
import { Outlet } from "react-router";
import ProductCard from "../components/ProductCard";
import DataContext from "../context/DataContext";

const ProductDress = () => {
  const { state } = useContext(DataContext);
  return (
    <div>
      <h1>드레스홈</h1>
      {state.productList.map((product) => (
        <div>
          <h1>카드리스트</h1>
          <ProductCard key={product.productId} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductDress;
