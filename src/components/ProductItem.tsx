interface ProductItem {
   product: {
    id: number,
    price: number,
    title: string
   }
}

export function ProductItem({product}:ProductItem) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}