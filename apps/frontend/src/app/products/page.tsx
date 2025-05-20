'use client'
import { useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    stockCode: string;
    supplierCode: string;
    categories: string;
    imageUrl: string;
    description: string;
    createdAt: Date;
}

export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p> Loading...</p>

    return (
        <main className="p-4">
            <h1 className="text-xl font-bold mb-4">Products</h1>
            <ul>
                {
                    products.map(p => (
                        <li key={p.id}>
                            <span>{p.name}</span> - <span>{p.price}</span>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}