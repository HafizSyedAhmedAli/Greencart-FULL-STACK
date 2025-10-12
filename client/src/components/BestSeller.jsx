import { useAppContext } from "../context/AppContext"
import ProductCard from "./ProductCard"

const BestSeller = () => {

    const { products } = useAppContext();
    const inStockProducts = products.filter((product) => product.inStock).slice(0, 5);

    return (
        <div className="mt-16">
            <p className="text-2xl md:text-3xl font-medium">BestSellers</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
                {inStockProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSeller