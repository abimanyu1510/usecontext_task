import React,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { UserContext } from '../App';

function Cards() {
    let{products,setProducts}=useContext(UserContext)
  return<>
   <div className="text-center" id="container">
    {
        products.map((e,i)=>{
let [quantity,setQuantity]=useState(0)
       
const addQuantity=()=>{
setQuantity(quantity+1)
}

  
const removeQuntity=()=>{
    setQuantity(quantity-1 && quantity===0)
}
const Addtocard=()=>{
    setQuantity(quantity+1)  
}

  return (<Card style={{width:'19rem', padding:'20px 20px'}}key={i} id='card'>
      
        <Card.Img variant="top" id="image" src={e.thumbnail} />
        <Card.Body>
          <Card.Title className='active' style={{fontWeight:"bolder"}}>{e.title}</Card.Title>
          <Card.Text style={{width:"200px", whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{e.description} </Card.Text>
        <ListGroup className=" card-list flush"  style={{textAlign:"center",fontWeight:"bolder"}}>
      <ListGroup.Item>Price:${e.price}</ListGroup.Item>
      <ListGroup.Item>Discount:${e.discountPercentage}</ListGroup.Item>
      <ListGroup.Item>Ratings: {e.rating}</ListGroup.Item>
      <ListGroup.Item>Stocks: {e.stock}</ListGroup.Item>
      <ListGroup.Item >Brand: {e.brand}</ListGroup.Item>
      <ListGroup.Item>Category: {e.category}</ListGroup.Item>
    </ListGroup> 
    <Card.Body>
    <Button variant="outline-success" className='text-center' onClick={()=>addQuantity()}>+</Button>
      <div className='text-center'>{quantity}</div>
      <Button variant="outline-danger" className='text-center' onClick={()=>removeQuntity()}>-</Button>
     
      <div><p>Total Amount:${e.price*quantity}</p></div>
      </Card.Body>
      <Button variant="primary"  onClick={()=>Addtocard()}>Add to Cart</Button>
       
      </Card.Body> 
      </Card>
   
 )
})}
 </div>
  
  </>
}

export default Cards