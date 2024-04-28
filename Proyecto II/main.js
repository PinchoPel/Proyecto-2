let productos = [
    {
        name: "Casco integral",
        price: 150 ,
        stars: 4,
        reviews: 200,
        seller: "MotoWorld",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxVPITsoxSZIYuiI6PFUfvevLhRhm5-eXZ2bMhBnHbjltWDZb9jYxfhl6fvb-oNR0GOJJnvH2Js0HH9d4O1GfN32hoJDPBjmIcz21YVdnhs6aQhPDwuPbygFHdpU11PHzzg_nz6tFrKQ&usqp=CAc"
    },
    {
        name: "Guantes de cuero",
        price: 50,
        stars: 3,
        reviews: 150,
        seller: "MotoAccesorios",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSvFhX4a42Le62ASQJspAhZGmfxT6bfisWyInIomQ2jweuNK1O-HKeGWqsMvOOnRJTWXadkOSgA70PCcRDo5Vw078bBz01xC4_zET04FFDGd_SZazdGiDYYenm0bpE12QBofB607Y&usqp=CAc"
    },
    {
        name: "Chaqueta de moto",
        price: 200,
        stars: 4,
        reviews: 300,
        seller: "SpeedRiders",
        image: "https://media-imgproxy.motoblouz.com/_/rs240/images/catalogue/dxr0221-blackwhite-1.jpg"
    },
    {
        name: "Botas para motociclismo",
        price: 120,
        stars: 4,
        reviews: 180,
        seller: "SpeedRiders",
        image: "https://media-imgproxy.motoblouz.com/_/rs240/images/catalogue/rst-bottes-moto-racing-homme-les-tractech-evo-3-black-duo.jpg"
    },
    {
        name: "Pantalones de cuero",
        price: 180,
        stars: 2,
        reviews: 250,
        seller: "MotoWorld",
        image: "https://m.media-amazon.com/images/I/71ZBGxKZVDL._AC_SY879_.jpg"
    },
    {
        name: "Maletas laterales",
        price: 300,
        stars: 5,
        reviews: 400,
        seller: "MotoEquipamiento",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIG1qyvqVIkaiPRNP-lTuiweEeibY--TItBEdyaBIlOGs0QOdlysDRuaY_xyVC4SCW0qBBCVeBd7J6CmlSzjezuPRNO6hzLAT7qdu7mHXgU3c2XD3MStr3NAJHvSbZvFotEp8VqX75dek&usqp=CAc"
    },
    {
        name: "Soporte para teléfono",
        price: 25,
        stars: 4,
        reviews: 100,
        seller: "MotoAccesorios",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHfHVi_LVG3isD3nOklZggimMsL3Fyg25B6XLXoVEwlqu-8tPaTveT__7WFXTTAUS-WMYcXTK06AQam8i0b69f0vsxJju3WJ2ZNnyco8xrXzNmwj98m-L_ihFbFqVGirqrDgCtkyd6_Ls&usqp=CAc"
    },
    {
        name: "Alforjas de cuero",
        price: 250,
        stars: 5,
        reviews: 280,
        seller: "MotoEquipamiento",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwy3eYSzMzw_RhDMxXNjHxUau8VwAaHzVxGy6GkmpvlkjcbKNShBf7LYQ7j58WqcuX90OU5pjUxoqIMCeNYH57HS22K1gemN5vIgJ0bEQ-HS8zmWBSdKskwG9tfVY4YG64a3gu2EUNgQ&usqp=CAc"
    },
    {
        name: "Casco visera azul",
        price: 30,
        stars: 4,
        reviews: 120,
        seller: "MotoSeguridad",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQV_fF9wsM8o1JThnGSWkwnk4JXgtyBMXSloV8RAXeh06rD572gGt8_JfKOAWkKRpxb5ftpsqDrMiwamYCXACWiMxyS4xXDsDeVscVwgRgJ4-0_OVrcuvEp_WEnRO9YXXQ48wX_Uo8Kbw&usqp=CAc"
    },
    {
        name: "Kit de limpieza",
        price: 20,
        stars: 4,
        reviews: 150,
        seller: "MotoMantenimiento",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpx6WEivEFvgsccbJpxSWNyxEE3WETzW13Lroug6kijxIfwCVOfQJkHoHwLdfac5KE5lTEAoY_OZQDw1GIBTfX22FoOccscqz4aTDIKoF2z9S-O9qGgul9sksBCkNZH-_QgFcpZg&usqp=CAc"
    },
    {
        name: "Antirrobo de manillar",
        price: 35,
        stars: 2,
        reviews: 130,
        seller: "MotoEquipamiento",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTP209z06sT3DSziZ7W9Wb0FwvCnLijP9av3TC8A2_dSLmRiixFVbRHmiNu9qG-Oyyz2icSxTW7RLKEdX3t80LbH_dZn-wnxUdTlPITQnMZezczbP6ABWdOAd3bO0qaL4aUxNBrMSnW-Z4&usqp=CAc"
    },
    {
        name: "Casco de carbono",
        price: 40,
        stars: 5,
        reviews: 170,
        seller: "MotoSeguridad",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLXGghovdjsLt1yQxyKEfEIZ8hl13wHAZn_rS0AGpk3BIBga2fQAgHc5h6iw0Uhdb6ZQFquxoWL1Z-9kGlhLCHmqzgY3O-SFziAYqLhQu7efnzy8LFnfKgeXRa5FzeLnYEPycBPFEwMMY&usqp=CAc"
    },
    {
        name: "Batería de litio",
        price: 100,
        stars: 3,
        reviews: 220,
        seller: "MotoMantenimiento",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTm1VwnEtNAs_IlHQX7kPjd8U4L4UHjlLo5nibarnJy4o8nd6mfC48GRAVSbnnG5OpOMugDMHwhzBe8xHUrvHqL63Y9s07QOwZpncf86GHCQHyydAF0hsLfpc6J9MPKgVCvOrcxaonD0w&usqp=CAc"
    },
    {
        name: "Intercomunicador Bluetooth",
        price: 80,
        stars: 1,
        reviews: 190,
        seller: "MotoAccesorios",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTz5AN-gvS6h3VFcb44sPD8Nm0zjsp8IWz-wI7Tb5_AgOaLXPjPxZUjfafRuQdgtoJYxs-guGUt74ouYo0DqqtsWas8hScwpxasT1gQ8sQLFTSk-njOx8Svi2v1weo9&usqp=CAc"
    },
    {
        name: "Cubrepiernas",
        price: 60,
        stars: 2,
        reviews: 160,
        seller: "MotoAccesorios",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCmZb2pbnZ8Fjbv-IIPkK4fnnLOWrmWW4EvPct--ZJN0VRkzwn58Q1XVmjsBB2e7PzcvYht1wbe8C8gRkELO1m3oYZUutq_voyXpd3Mf-VoNvzXuYTSm4jBN9VuMDVoq6zk3NK44_mog&usqp=CAc"
    },
    {
        name: "Cubierta protectora",
        price: 50,
        stars: 3,
        reviews: 140,
        seller: "MotoProtección",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7fPuVnbZEXrqzJir7EyAOwVv-KyDiiTu8Qa5zsHKXVEFZRAQyov1FfDMgsDpth7fBQg-pSBy7M63TO162EQymPpqF903a_5ybNXwkceKJxeyh4KZ1Q6s_wDG6MZn9&usqp=CAc"
    },
    {
        name: "Kit de herramientas",
        price: 45,
        stars: 5,
        reviews: 180,
        seller: "MotoMantenimiento",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQIVlBTQdOQjlYSveEhQqQIrX95gRjJfQdJoY-UFqvrgBCCKH8-jeXLJEKAWNXbDpUSVdoZVBxTbNL_n8M9_sDzl8vNhOy4KMki8pcX0b6ql61KrOhtjF0sjbqiij6fDgz6OJJhK1SOig&usqp=CAc"
    },
    {
        name: "Alarma para moto",
        price: 70,
        stars: 4,
        reviews: 200,
        seller: "MotoSeguridad",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbN42JJ512M7Z1R0IKSB039JnYzbiMnY4YaZcsvq5w5Td0rNhlMugstKFjbZA89WXzXiDjtfhQDOJJEvYpJw2mTSWrkuYbyDUUod7JZfpnsoZF1Y6CG0B6q9UAkSXEow&usqp=CAc"
    },
    {
        name: "Luz LED para moto",
        price: 55,
        stars: 5,
        reviews: 220,
        seller: "MotoAccesorios",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOM0dJWBi3bR0aaktZYuplxomTVp3_1i7Qtoh0KTPiSV09f1h5B-2k&s"
    },
    {
        name: "Parrilla trasera",
        price: 40,
        stars: 3,
        reviews: 180,
        seller: "MotoEquipamiento",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSEtQIhJnjxAjpRKoZYjzmaJ-sxiRMLxXfBC29ugLw0WTiBg0VTM4rr6f-nsyVlCN2CKteDjXzhL9Yaei6YFfJlUmIFVP_Bc30IQvPX6dazG-P1dY8ZgqPyMY"
    }
];

//! creación del filtro por vendedor

const select = document.createElement("select");
const sectionFilter = document.querySelector("#filter");
let options = []; 
let firstOption = document.createElement("option");
firstOption.textContent = "Seleccione un vendedor";
select.append(firstOption);
productos.forEach(function(param) {
    const seller = param.seller;                 
  
    if (!options.includes(seller)) {
        options.push(seller); 
        const option = document.createElement("option");
        option.textContent = seller; 
        select.appendChild(option); 
    }
});
sectionFilter.appendChild(select); 

//! creación de la galería y filtro

function renderProductos(productos){
    let divProducts = document.getElementById("products");
    divProducts.innerHTML = ""; 
productos.forEach(function(param){
    const carta = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("p");
    const price = document.createElement("p");  
    const starsGroup= document.createElement("div"); 
    starsGroup.className = "starsGroup";    
    for (let index = 1; index <= 5; index++) { 
        const stars = document.createElement("div");
        stars.className = "estrella";
        if (param.stars >= index) {
            stars.className = "rellena";
        }
        starsGroup.append(stars);
    }
   const seller = document.createElement("p");
   const reviews = document.createElement("p");
   
   image.src = param.image;
   name.textContent = param.name;
   price.textContent = param.price;
   seller.textContent = param.seller;
   reviews.textContent = param.reviews + " opiniones";
   carta.append(image);
   carta.append(name);
   carta.append(price);
   carta.append(starsGroup);
   carta.append(seller);
   carta.append(reviews);
   const products = document.body.querySelector("#products");
   products.append(carta);
   carta.className = "carta";
   price.className = "price";
})}
renderProductos(productos);

//!Limpieza de filtros - creación

const cleanFilter = document.createElement("button");
cleanFilter.textContent = "Limpiar filtros";
sectionFilter.append(cleanFilter);



//! Creación del Filtro por dinero

let inputMoney = document.createElement("input");
const buttonMoney = document.createElement("button");
inputMoney.placeholder ="Buscar por precio";
inputMoney.type = "number"; 
buttonMoney.textContent = "Buscar";
sectionFilter.append(inputMoney);
sectionFilter.append(buttonMoney);

//!Variables

let filteredSellers = [];
let inputValue = inputMoney.value;
let combinedResults = [];
let filteredProducts = [];
let combinedProducts = [];

//!Filtro por vendedor

 function sellerSelector (event){ 
  filteredSellers = [];
  combinedProducts =[];
    let dealer = event.target.value;

    if (inputMoney.value !== "") {

            for (let index = 0; index < productos.length; index++) {
                if (productos[index].seller === dealer && productos[index].price <= inputMoney.value) {
                    combinedProducts.push(productos[index]);
                }
            }
        
        renderProductos(combinedProducts);

        if (combinedProducts.length == 0 && select.selectedIndex !== 0){
            alert("No se encuentran artículos con ese precio"); 
        }
    }

   else if(inputMoney.value == "")
   {for (let index = 0; index < productos.length; index++) {
    if (productos[index].seller === dealer){
        filteredSellers.push(productos[index]);
    }
}

renderProductos(filteredSellers);}
} 

select.addEventListener("change",sellerSelector);


//! Filtro por precio, con mensaje de error incluido

function priceSelector(){

    inputValue = inputMoney.value;
    combinedResults = [];
    filteredProducts = [];

    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Introduzca una cantidad válida");
        return; 
    }

  else if (select.selectedIndex === 0) {
        for (let index = 0; index < productos.length; index++) {
            if (productos[index].price <= inputMoney.value){
               filteredProducts.push(productos[index]);
           }
       }
       if (filteredProducts.length === 0) {
        alert("No se encuentran artículos con ese precio");
    }

        renderProductos(filteredProducts); 

       } 

   else if (select.selectedIndex !== 0) {

        
            for (let index = 0; index < productos.length; index++) { 
                if (productos[index].price <= inputMoney.value && productos[index].seller === select.value){
                    combinedResults.push(productos[index]); 
                }
            }
        
   if (combinedResults.length == 0) {
        alert("No se encuentran artículos con ese precio"); 
    }

    renderProductos(combinedResults); 

     };
};

 buttonMoney.addEventListener("click", priceSelector);

//! Evento limpieza de filtros 2)

//!Botón limpiar filtros

cleanFilter.addEventListener("click", function(){
    renderProductos(productos);
   inputMoney.value = "";
   filteredSellers = [];
combinedResults = [];
filteredProducts = [];
combinedProducts = [];
   if (select.selectedIndex !== 0) {
    select.selectedIndex = 0;
   }
});

//!Filtro primera opción

select.addEventListener("change", function(){
    if (select.selectedIndex === 0) {
        renderProductos(productos);
    }
});


