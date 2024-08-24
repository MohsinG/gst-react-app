import React, { useEffect , useState } from 'react'

const ProductList = () => {
  const [state, setState] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:3001/api/products")
    //         .then((response) => response.json())
    //         .then((data) =>  setState(data));
    // }, [])
    console.log("state",state);
  return (
   <div>ProductList
 {/* {
    state && state.map(product => (
    <li key={product.id}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
      </li>
    ))}*/}
    </div>
  )
}

export default ProductList
