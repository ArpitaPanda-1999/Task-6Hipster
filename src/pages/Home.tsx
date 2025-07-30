import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product: any) => (
                <div key={product.id} className="border rounded p-4 shadow">
                    <h2 className="font-semibold">{product.title}</h2>
                    <p>{product.description.slice(0, 80)}...</p>
                </div>
            ))}
        </div>
    );
}
