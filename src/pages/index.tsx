import { Inter } from "next/font/google";
import { FormEvent, useState } from "react";
import { SearchResults } from "@/components/SearchResults";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
        <button type="submit">Buscar</button>
      </form>
      <SearchResults results={results} />
    </div>
  );
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
 * Comparação de igualdade, serve para funções repassadas, ou seja funções que são utilizada em lugares diferentes ou mesmo lugar.
 */


// Dynamic import (code splitting)

/**
 * Leasing loading, carregamento do compomente apenas quando a gente precisar, por exemplo um modal...
 */

// Virtualização, (virtualização de listas)

/**
 * 1. Serve para otimizar desempenho para listas longas, tipo uma lista de item com varios item até ter um scrools, a virtualização permite que apenas os item visiveis na tela seja renderizado e não todos os itens
 */

// Bundle Analyzer

/**
 * 1. Serve para gerenciar o tamanho dos modulos Javascript, ele gera um relatório visual do tamanho de cada módulo e suas dependecias.
 * 2. Otima ferramenta para usar antes de um deploy por exemplo.
 */