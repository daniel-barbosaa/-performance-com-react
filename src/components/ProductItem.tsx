import { memo } from "react"
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

export const ComponentItem = memo(ProductItem, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
})