import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: Array<{
        id: number,
        price: number,
        title: string
    }>
}

export function SearchResults({results}: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        },0)
    }, [results])

    return (
        <div>
            {totalPrice}
            {results.map(product => {
                return (
                    <ProductItem product={product}/>
                )
            })}
        </div>
    )
}

// FLUXO DE RENDERIZAÇÃO
/*  
1. Criar uma nova versão do componente
2. Comparar com a versão anterior
3. Se houver alterações, vai atualizar o que alterou
*/

// QUANDO USAR O MEMO 
/* 
1. Pure functional Components
2. Renders too often
3. Re-renders with same props
4. Medium to big size
*/

// useMemo quando usar

/**
 * 1. Cálculos pesados
 * 2. Igualdade referencal (quando a gente repassa aquela informação a um componente filho) EX: <Component totalPrice={totalPrice}/> 
 */

// useCallback quando usar

/**
 * 
 */