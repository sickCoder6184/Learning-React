const restaurantList = [
  {
    resName: "Burger King",
    foodName: "Whopper",
    foodType: "Non-Veg",
    deliveryTime: "10-15 min",
    cuttleries: "Wrapper, Tissue",
    price: "₹229",
    img: "https://b.zmtcdn.com/data/pictures/chains/8/6506108/c8008523810583087401ff292c1763a3.jpg?fit=around|960:500&crop=960:500;*,*"
  },
  {
    resName: "Subway",
    foodName: "Veggie Delight Sub",
    foodType: "Veg",
    deliveryTime: "12-20 min",
    cuttleries: "Paper Wrap, Napkin",
    price: "₹199",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFPyg6N-Z51ndufYvBvyN-oUe8tMc4IxOrw&s"
  },
  {
    resName: "Pizza Hut",
    foodName: "Tandoori Paneer Pizza",
    foodType: "Veg",
    deliveryTime: "15-25 min",
    cuttleries: "Box, Tissue",
    price: "₹399",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCCBkX2hqH1rPO4Gaycw4rBmN43DZdXJCqg&s"
  },
  {
    resName: "Biryani Blues",
    foodName: "Hyderabadi Biryani",
    foodType: "Non-Veg",
    deliveryTime: "20-30 min",
    cuttleries: "Box, Spoon",
    price: "₹350",
    img: "https://b.zmtcdn.com/data/pictures/chains/3/800363/29238511a5dd3312682cc1dc93b8539d.jpg?fit=around|750:500&crop=750:500;*,*"
  },
  {
    resName: "Chai Point",
    foodName: "Masala Chai & Samosa",
    foodType: "Veg",
    deliveryTime: "10-15 min",
    cuttleries: "Cup, Tissue",
    price: "₹120",
    img: "https://images.squarespace-cdn.com/content/v1/5f0fff53181ec21dc70fb3b1/1605243838556-M5418IZRH9LH7B9650ON/Banner.jpg"
  },
  {
    resName: "Rolls Mania",
    foodName: "Chicken Tikka Roll",
    foodType: "Non-Veg",
    deliveryTime: "12-18 min",
    cuttleries: "Foil, Tissue",
    price: "₹149",
    img: "https://dtbtob4osa700.cloudfront.net/DineImages/04052020070044848_dprim.PNG"
  },
  {
    resName: "Behrouz Biryani",
    foodName: "Lucknowi Mutton Biryani",
    foodType: "Non-Veg",
    deliveryTime: "25-30 min",
    cuttleries: "Box, Spoon",
    price: "₹499",
    img: "https://b.zmtcdn.com/data/menus/633/19268633/a12ab110b8e6bd3f7da660d71bba95cf.jpg"
  },
  {
    resName: "Faasos",
    foodName: "Paneer Signature Wrap",
    foodType: "Veg",
    deliveryTime: "10-15 min",
    cuttleries: "Wrap, Tissue",
    price: "₹179",
    img: "https://b.zmtcdn.com/data/menus/628/19268628/dadb365a5dff4d99c2a78509f23a3fab.jpg"
  },
  {
    resName: "Wow! Momo",
    foodName: "Chicken Steamed Momos",
    foodType: "Non-Veg",
    deliveryTime: "8-14 min",
    cuttleries: "Box, Fork",
    price: "₹159",
    img: "https://content.jdmagicbox.com/comp/lucknow/r6/0522px522.x522.190801202435.l7r6/catalogue/wow-momo-lucknow-ecdl4ndtjb.jpg"
  },
  {
    resName: "The Belgian Waffle Co.",
    foodName: "Dark Chocolate Waffle",
    foodType: "Veg",
    deliveryTime: "15-20 min",
    cuttleries: "Box, Spoon",
    price: "₹129",
    img: "https://b.zmtcdn.com/data/pictures/chains/2/18639812/f410a8bd4ccbe2d0febc882d0e2ef3f1.jpg?fit=around|750:500&crop=750:500;*,*"
  },
  {
    resName: "Hocco Eatery",
    foodName: "Bombay Sandwich",
    foodType: "Veg",
    deliveryTime: "12-18 min",
    cuttleries: "Wrap, Tissue",
    price: "₹149",
    img: "https://b.zmtcdn.com/data/reviews_photos/595/8de7cc53eb055b594c867c127244b595_1625054834.jpg"
  },
  {
    resName: "Bakingo",
    foodName: "Red Velvet Cake Jar",
    foodType: "Veg",
    deliveryTime: "20-25 min",
    cuttleries: "Jar, Spoon",
    price: "₹249",
    img: "https://www.bakingo.com/blog/wp-content/uploads/2016/12/bakingo-a-cake-bakery.jpg"
  },
  {
    resName: "Taco Bell",
    foodName: "Loaded Chicken Nachos",
    foodType: "Non-Veg",
    deliveryTime: "10-15 min",
    cuttleries: "Box, Fork",
    price: "₹199",
    img: "https://b.zmtcdn.com/data/pictures/chains/3/20350303/81388902c07f45e1e7caef3999861ba0.jpg?fit=around|960:500&crop=960:500;*,*"
  },
  {
    resName: "Natural Ice Cream",
    foodName: "Tender Coconut Scoop",
    foodType: "Veg",
    deliveryTime: "10-15 min",
    cuttleries: "Cup, Spoon",
    price: "₹99",
    img: "https://content.jdmagicbox.com/comp/def_content_category/natural-ice-cream-parlours-11967334-yvhybqr6pu-250.jpg"
  },
  {
    resName: "Giani's",
    foodName: "Hot Chocolate Fudge",
    foodType: "Veg",
    deliveryTime: "15-20 min",
    cuttleries: "Cup, Spoon",
    price: "₹149",
    img: "https://content3.jdmagicbox.com/comp/def_content_category/giani-ice-cream-parlours-11967271-75m12mex49.jpg"
  },
  {
    resName: "Keventers",
    foodName: "Cold Coffee Shake",
    foodType: "Veg",
    deliveryTime: "10-12 min",
    cuttleries: "Bottle, Straw",
    price: "₹199",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuZmj9-au87ADmCfhGEMFwZE1OJx1AOR0YQ&s"
  },
  {
    resName: "FreshMenu",
    foodName: "Thai Curry Rice Bowl",
    foodType: "Veg",
    deliveryTime: "18-25 min",
    cuttleries: "Box, Spoon",
    price: "₹299",
    img: "https://static.startuptalky.com/2021/10/freshmenu-logo_startuptalky.jpg"
  },
  {
    resName: "Bikanervala",
    foodName: "Chhole Bhature",
    foodType: "Veg",
    deliveryTime: "15-20 min",
    cuttleries: "Plate, Spoon",
    price: "₹180",
    img: "https://cdn.shopify.com/s/files/1/0774/9769/6567/files/ITL_WIN_Tower_480x480.png?v=1718801282"
  },
  {
    resName: "Theobroma",
    foodName: "Dense Chocolate Brownie",
    foodType: "Veg",
    deliveryTime: "15-18 min",
    cuttleries: "Box, Spoon",
    price: "₹149",
    img: "https://b.zmtcdn.com/data/pictures/3/20916433/a4547a2a5215d19633a50b3f407a76d5.jpg"
  },
  {
    resName: "Annapurna Bhog",
    foodName: "Puri Sabzi",
    foodType: "Veg",
    deliveryTime: "10-15 min",
    cuttleries: "Plate, Spoon",
    price: "₹99",
    img: "https://content3.jdmagicbox.com/comp/ghaziabad/y6/011pxx11.xx11.220318151916.i6y6/catalogue/annapurna-bhog-restaurant-and-tiffin-service-ghaziabad-restaurants-nvithtjes9.jpg"
  }
];

export default restaurantList;
