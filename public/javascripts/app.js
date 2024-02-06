
const App=()=>{

    const[products,setproducts]=React.useState([])

    const[form,setform]=React.useState({
        name:'',
        price:''
    })

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
    function handleSubmit(e){
    e.preventDefault()
    if(!form.name|| !form.price){
        return
    }
    fetch('api/products',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(form)
        
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    featchProducts();
    setform({
        name:'',
        price:''
    })
    }
    function updateForm(event,field){
        if(field==='name'){
            setform({
                ...form,
                name:event.target.value
            })
        }
        else{
            setform({
                ...form,
                price:event.target.value
            })
        }
    }


function delHandler(id){
fetch(`api/products/${id}`,{
    method:'DELETE'
}).then((res)=>res.json())
.then((data)=>{
    console.log(data)
    featchProducts();
})
}

    return (
        <>
        <div className='card'>
           <div className='card-header'>
               add a product
           </div>
           <div className='card-body'>
            <form onClick={handleSubmit}>
                <input type='text' value={form.name} onChange={()=>updateForm(event,'name')} placeholder='name'/>
                <input type='text' value={form.price} onChange={()=>updateForm(event,'price')} placeholder='price'/>
                <button type='submit'>submit</button>
            </form>
           </div>
        </div>
        <ul className="list-group">
  {
    products.map((product)=>{

     return (  <li key={product.id} className="list-group-item">
       <div>
        <strong>{product.price}</strong>
        ${product.name}
       </div>
       <button onClick={()=>delHandler(product.id)} >🗑️</button>
        </li>
     )
    })
  }
</ul>
</>
    );

 
}
ReactDOM.render(<App/>,document.getElementById('app'))