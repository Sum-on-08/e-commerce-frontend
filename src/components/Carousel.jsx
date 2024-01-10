import React from 'react'
import img1 from"../photos/C1.jpg";
import img2 from'../photos/C2.jpg';
import img3 from'../photos/C4.jpg';
const styles={
    // width:"25%",
    backgroundColor:"red",
    height:"30rem",
    objectFit: "fill"
}

const styleP={
    color: 'white',
  textStroke: '2px solid black',
  fontWeight:'600',
  fontSize:'xLarger'
    

    
}
// 
function Carousel() {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" style={{height:"30rem",margin:"2rem",display:"flex"}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src={img1} style={styles} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>WOMEN'S Wear</h5>
          <p style={styleP}>"Discover the latest trends in women's fashion at our shopping mall, where style meets elegance."</p>
        </div>
      </div>
      <div className="carousel-item">
      <img src={img2} style={styles} className="d-block w-100" alt="..."  />
        <div className="carousel-caption d-none d-md-block">
          <h5>MEN'S Wear</h5>
          <p>"Elevate your style with the finest men's fashion choices at our shopping mall."</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img3} style={styles} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>CASUALS</h5>
          <p>"Stay comfortable and chic with our casuals collection at our shopping mall."</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Carousel
