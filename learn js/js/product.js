

var products = [

  {
   'id':'1',
   'price':'1799',
   'name':'ZOTAC Gaming GeForce RTX 4090 Trinity OC 24GB GDDR6X 384-bit 21 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 3.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-D40900J-10P',
   'color':'silver',
   'img':'Untitled design.png',
   'stock':' 1  ',
  },

  {
      'id':'2',
      'price':'659',
      'name':'GIGABYTE GeForce RTX 3060 Gaming OC 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060GAMING OC-12GD Video Card',
      'color':'silver',
      'img':'Untitled design (1).png',
      'stock':'12',
 
     },

     {
      'id':'3',
      'price':'220',
      'name':'MSI Gaming GeForce GTX 1650 128-Bit HDMI/DP/DVI 4GB GDRR6 HDCP Support DirectX 12 VR Ready OC Graphics Card (GTX 1650 D6 Ventus XS OC)',
      'color':'silver',
      'img':'1650.jpg',
      'stock':'6',
 
     },
 

]


for(var i=0;i<products.length;i++){
  $('#products').append(

      

      

      '<div class="kroducts">'



      +'<div class="product-image">'
          +'<img src="../img/'+products[i].img+'"  class="product-image-style">'
      +'</div>'

     +' <div class="product-info">'

       + '<div class="product-info-2">'

         + '<div class="product-name-div">'

           + '<h1  class="product-name">'+products[i].name+'</h1>'
            
         +' </div>'

         + '<div class="product-price-buy-div">'

           +' <div class="p-d-s-div">'

             +' <h1 class="product-price">'+products[i].price+'$</h1>'

              +'<h5 class="delevery-price">Free Delevery</h5>'
             


              +'<div class="add-to-card-div">'
                      
                      +'<div style="width: 50%;">'
                      +'<h5 class="stock"> Only  '+products[i].stock+' left in stock - We.ll Be Add Soon.</h5>'
                      +'</div>'

                      +'<div>'
                      +'<button class="add-to-card-button">Add to card</button>'
                      +'</div>'




                    +'</div>'

            +'</div>'

            +'<div>'

           +' </div>'

             

         + '</div>'

        +'</div>'

      +'</div>'

      
      +'</div>'



    
      
  )
}