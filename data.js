import { createServer, Model } from "miragejs";

createServer({
  models: {
    shoe: Model,
  },

  seeds(server) {
    server.create("shoe", {
      id: "1",
      company : "new balance",
      name: "Protection Pack sneakers",
      price: 579.99,
      description: "A timeless pair of leather sneakers that combines style and comfort. Perfect for casual or semi-formal occasions.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/07/13/59/21071359_51480829_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/07/13/59/21071359_51480834_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/07/13/59/21071359_51480831_1000.jpg",
    });
    server.create("shoe", {
      id: "3",
      company : "new balance",
      name: "Protection Grey sneakers",
      price: 369.99,
      description: "Stylish and comfortable loafers made from premium materials. Ideal for a relaxed yet elegant look.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/19/69/53/55/19695355_43940886_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/19/69/53/55/19695355_43940889_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/19/69/53/55/19695355_43940887_1000.jpg",
    });
    server.create("shoe", {
      id: "5",
      company : "aomthing",
      name: "9060 Truffle sneakers",
      price: 829.99,
      description: "Elegant dress shoes crafted with precision and attention to detail. Perfect for formal events.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/19/48/71/76/19487176_44338885_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/19/48/71/76/19487176_44340186_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/19/48/71/76/19487176_44340187_1000.jpg",
    });
    server.create("shoe", {
      id: "6",
      company : "jordan",
      name: "Craft Cement Grey sneakers",
      price: 779.99,
      description: "Versatile sneaker boots that combine the style of sneakers with the functionality of boots. Great for all-season wear.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/06/99/75/21069975_51481336_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/06/99/75/21069975_51481339_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/06/99/75/21069975_51481328_1000.jpg",
    });
    
    server.create("shoe", {
      id: "7",
      company : "jordan",
      name: " CMFT 2 Pine Green",
      price: 699.99,
      description: "Comfortable slip-on shoes for casual occasions. Easy to wear and stylish.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/20/36/23/94/20362394_51590197_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/20/36/23/94/20362394_51590194_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/20/36/23/94/20362394_51590196_1000.jpg",
    });
    server.create("shoe", {
      id: "4",
      company : "new balance",
      name: "9060 suede sneakers",
      price: 799.99,
      description: "Durable and waterproof hiking boots with advanced traction for your outdoor adventures.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/19/69/53/32/19695332_50444496_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/19/69/53/32/19695332_50444479_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/19/69/53/32/19695332_50444482_1000.jpg",
    });
    
    server.create("shoe", {
      id: "8",
      company : "jordan",
      name: "J Balvin sneakers",
      price: 799.99,
      description: "Performance-focused running shoes designed for runners. Offers excellent support and cushioning.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/55/65/08/21556508_51490327_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/55/65/08/21556508_51490325_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/55/65/08/21556508_51490335_1000.jpg",
    });
    
    server.create("shoe", {
      id: "9",
      company : "jordan",
      name: "University Blue/Black sneakers",
      price: 799.99,
      description: "Trendy sneakers with unique design elements. Perfect for those who want to make a style statement.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/20/32/01/61/20320161_50858686_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/20/32/01/61/20320161_50858687_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/20/32/01/61/20320161_50858681_1000.jpg",
    });
    server.create("shoe", {
      id: "2",
      company : "new balance",
      name: "Age Of Discovery sneakers",
      price: 959.99,
      description: "High-performance running shoes designed to provide excellent support and cushioning for your workouts.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/19/44/98/61/19449861_43225790_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/19/44/98/61/19449861_43225791_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/19/44/98/61/19449861_43226474_1000.jpg",
    });
    server.create("shoe", {
      id: "10",
      company : "jordan",
      name: "High OG sneakers",
      price: 1159.99,
      description: "Stylish leather ankle boots suitable for both casual and formal occasions. Versatile and comfortable.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/19/53/79/85/19537985_43587508_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/19/53/79/85/19537985_43587521_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/19/53/79/85/19537985_43585724_1000.jpg",
    });
    server.create("shoe", {
      id: "12",
      company : "adidas",
      name: "Gazelle Core Green sneakers",
      price: 819.99,
      description: "Iconic high-top sneakers that never go out of style. Suitable for urban adventures and street fashion.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/90/44/06/21904406_51676108_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/90/44/06/21904406_51676106_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/90/44/06/21904406_51676105_1000.jpg",
    });
    
    server.create("shoe", {
      id: "11",
      company : "adidas",
      name: "Gazelle Mesa sneakers",
      price: 990.99,
      description: "Trendy and comfortable sandals for warm-weather days. Perfect for a day at the beach or a casual outing.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/90/44/08/21904408_51676904_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/90/44/08/21904408_51676905_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/90/44/08/21904408_51676901_1000.jpg",
    });
    
    
    server.create("shoe", {
      id: "13",
      company : "adidas",
      name: "Samba Adv Carbon sneakers",
      price: 839.99,
      description: "Elegant formal derby shoes crafted from fine leather. Ideal for weddings and special occasions.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/80/77/37/21807737_51674393_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/80/77/37/21807737_51674389_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/80/77/37/21807737_51674391_1000.jpg",
    });
    
    
    server.create("shoe", {
      id: "15",
      company : "adidas",
      name: "Ozweego leather sneakers",
      price: 949.99,
      description: "Lightweight and breathable cotton slip-on shoes. Ideal for casual and laid-back days.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/33/14/13/21331413_51517958_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/33/14/13/21331413_51517965_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/33/14/13/21331413_51517963_1000.jpg",
    });    
    server.create("shoe", {
      id: "14",
      company : "adidas",
      name: "Ozweego panelled sneakers",
      price: 949.99,
      description: "Durable outdoor sandals with adjustable straps. Perfect for hiking and camping trips.",
      imageUrlOne: "https://cdn-images.farfetch-contents.com/21/57/57/22/21575722_51570387_1000.jpg",
      imageUrlTwo: "https://cdn-images.farfetch-contents.com/21/57/57/22/21575722_51570390_1000.jpg",
      imageUrlThree: "https://cdn-images.farfetch-contents.com/21/57/57/22/21575722_51570389_1000.jpg",
    });
  },

  routes() {
    
    this.namespace = "/api";
    this.logging = false;

    this.get("/product/recommend", (schema) => {
      // Retrieve all shoe data and slice the first five items
      const recommendedShoes = schema.shoes.all().slice(7, 11 );
      return recommendedShoes;
    });
    this.get("/products/men", (schema) => {
      // Retrieve all shoe data and slice the first five items
      const productForMen = schema.shoes.all().slice( 4 , 11 );
      return productForMen;
    });
    this.get("/products/women", (schema) => {
      // Retrieve all shoe data and slice the first five items
      const productForMen = schema.shoes.all().slice( 5 , 15 );
      return productForMen;
    });
    
    this.get("/products", (schema) => {
      // Retrieve all shoe data
      return schema.shoes.all();
    });

    this.get("/product/:id", (schema, request) => {
      const id = request.params.id;
      // Retrieve a specific shoe by ID
      const shoe = schema.shoes.find(id);
      if (shoe) {
        return shoe;
      } else {
        return new Response(404, {}, { error: "Shoe not found" });
      }
    });

    // Define additional routes or endpoints as needed
  },
});
