import React from 'react';
import Carousel from '../Carousel';
import Card from '../Card/Card';
import {Product} from"../../product"

function Home() {
  return (
    <div>
       <Carousel/>
      <div className='card-row' style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",height:"auto",width:"100%"}}>
        
      {Product.map((product) => (
          <Card data={product} />
          ))}
        </div>
    </div>
  )
}

export default Home
