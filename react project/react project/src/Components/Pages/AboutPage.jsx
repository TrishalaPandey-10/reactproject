import React from 'react';
import Footer from '../Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
      <h2 className="text-center">About Us - Our Story</h2>
      <p>Welcome to our online store, your one-stop destination for all things fashionable and trendy! We are a leading eCommerce website specializing in offering high-quality men's clothing, women's clothing, women's jewelry, and electronics.</p>

      <h3>Our Vision</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis consequuntur inventore fugit corporis eveniet? Eligendi ut fuga ducimus magni nobis illo atque. Dicta rem dolor cum dolores! Fuga neque cupiditate dolor ipsa dolorem expedita? Quisquam reprehenderit repellendus necessitatibus rem aperiam voluptates maiores doloribus quod delectus!</p>

      <h3>Wide Selection of Men's and Women's Clothing</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro neque architecto voluptate iste provident eius hic aliquam, excepturi minus cum consequatur tenetur tempore alias unde veniam dignissimos, consectetur necessitatibus! Dolor ex error harum delectus, reiciendis aut, ab nulla et sunt rerum vero. Non, quidem saepe.</p>

      <h3>Exquisite Women's Jewelry</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit iste ratione unde eos sapiente laborum quos recusandae fugiat accusamus ipsum numquam rerum et, ad, provident sequi tempore delectus soluta libero totam earum itaque quae! Numquam perferendis doloribus voluptates molestiae corporis. Perferendis, impedit voluptatibus?</p>

      <h3>Cutting-Edge Electronics</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit similique illum vel sapiente odio esse corrupti. Quasi, modi eius perspiciatis cupiditate sint voluptates, fugiat nisi totam unde necessitatibus consectetur. Eligendi, id, doloribus ea modi impedit excepturi nostrum aut dolores assumenda magni repellendus dignissimos veniam maxime magnam accusamus fuga, alias esse delectus at similique doloremque perspiciatis.</p>

      <h3>Quality and Customer Satisfaction</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deserunt corrupti ullam iure sed iste in molestias placeat? Recusandae quia temporibus quo, provident similique cum vero, laudantium fuga accusamus officia ducimus exercitationem et voluptatem dicta itaque rem corrupti adipisci sequi optio quaerat quod, iste unde.</p>

      <h3>Stay Updated with Fashion and Tech</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium molestiae at minima sapiente ratione ducimus? Quas commodi soluta at corporis cupiditate natus eaque aliquid amet doloribus ducimus molestias, fugit, aliquam deleniti maiores maxime illo aspernatur saepe. Quas eum modi corrupti nostrum magnam exercitationem soluta beatae ab dicta animi iure natus ea, quisquam dolorum rem praesentium illum esse!</p>

      <p>Thank you for choosing our online store. We look forward to serving you with the best in fashion and technology. Happy shopping!</p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronic Gagets</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;
