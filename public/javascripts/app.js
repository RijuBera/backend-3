
const App=()=>{

    const[products,setproducts]=React.useState([])
    React.useEffect(() => {
     featchProducts();
    }, [])
    

    function featchProducts(){
        fetch('/api/products')
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            setproducts(data)
        })
    }
    return (
        <ul className="list-group">
  {
    products.map((product)=>{

     return   <li key={product.id} className="list-group-item">
       <div>
        <strong>{product.price}</strong>
        ${product.name}
       </div>
       <button >🗑️</button>
        </li>

    })
  }
</ul>
    );

 
}
ReactDOM.render(<App/>,document.getElementById('app'))