const myProducts = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};



//filter


const filterAll = document.getElementById("all-btn");
const filterMens = document.getElementById("mens-btn");
const filterWomen = document.getElementById("women-btn");
const filterJewellery = document.getElementById("jewellery-btn");
const filterElectronics = document.getElementById("electronics-btn");



const search = document.getElementById("search");
const rengeBar = document.getElementById("range");
const applyBtn = document.getElementById("apply-btn");
const lowPrice = document.getElementById("0-25");
const mediumPrice = document.getElementById("25-50");
const highPrice = document.getElementById("50-100");
const veryHighPrice = document.getElementById("100on");




const menSection = document.getElementById("mens-section");
const womenSection = document.getElementById("womens-section");
const jewellerySection = document.getElementById("jewellery-section");
const electronicSection = document.getElementById("electronics-section");
const searchFn = document.getElementById("searched");

let men = [];
let women = [];
let jewellery = [];
let electronics = [];
let myCart = [];

let temp = JSON.parse(localStorage.getItem("cart"));

if (temp) {
  myCart = temp
}


let url = "https://fakestoreapi.com/products";

fetchAPIproducts(url);


async function fetchAPIproducts(url) {
  try {
    let data = await fetch(url);
    // console.log(data);
    response = await data.json();
    // console.log(response);

    men = response.filter((item) => {
      return item.category == "men's clothing";
    });
    // console.log(men);


    women = response.filter((item) => {
      return item.category == "women's clothing";
    });
    // console.log(women);


    jewellery = response.filter((item) => {
      return item.category == "jewelery";
    });
    // console.log(jewellery);


    electronics = response.filter((item) => {
      return item.category == "electronics";
    });
    // console.log(electronics);

    displayAll();



  }
  catch (error) {
    console.log("Error-message : " + error);
  }
}

filterAll.addEventListener("click", displayAll);
function displayAll() {

  filterAll.classList.add("active");
  searchFn.classList.add("hide-class");

  const allproducts = [menSection, womenSection, jewellerySection, electronicSection];

  // console.log(allproducts);

  allproducts.forEach((section) => section.classList.remove("hide-class"));

  const filtersAll = [filterMens, filterWomen, filterJewellery, filterElectronics];

  filtersAll.forEach((section) => section.classList.remove("active"));


  const menP = men.map((item) => {
    return renderItems(item);
  });
  // console.log(menP);
  
  document.getElementById("mens-items").innerHTML= menP.join("");


  const womenP = women.map((item) => {
    return renderItems(item);
  });

  document.getElementById("womens-items").innerHTML= womenP.join("");

  const jewwelleryP = jewellery.map((item) => {
    return renderItems(item);
  });

  document.getElementById("jewellery-items").innerHTML= jewwelleryP.join("");


  const electronicsP = electronics.map((item) => {
    return renderItems(item);
  });

  document.getElementById("electronics-items").innerHTML= electronicsP.join("");




}

//filtering men
filterMens.addEventListener("click", displayMensclothes);

function displayMensclothes() {
  menSection.style.display = "block";
  womenSection.style.display = "none";
  jewellerySection.style.display = "none";
  electronicSection.style.display = "none";
  menSection.classList.remove("hide-class");
  filterMens.classList.add("active");

  const allproducts = [womenSection, jewellerySection, electronicSection];


  allproducts.forEach((section) => section.classList.add("hide-class"));

  const filtersAll = [
    filterAll, filterWomen, filterJewellery, filterElectronics
  ];
  filtersAll.forEach((section) => section.classList.remove("active"));

  const myPage = men.map((item) => {
    return renderItems(item);
  });

  document.getElementById("mens-items").innerHTML = myPage.join("");

}

//women filter

filterWomen.addEventListener("click", displayWomensclothes)

function displayWomensclothes() {
  womenSection.style.display = "block";
  menSection.style.display = "none";
  // womenSection.style.display="none";
  jewellerySection.style.display = "none";
  electronicSection.style.display = "none";
  womenSection.classList.remove("hide-class");
  filterWomen.classList.add("active");

  const allproducts = [menSection, jewellerySection, electronicSection];


  allproducts.forEach((section) => section.classList.add("hide-class"));

  const filtersAll = [
    filterAll, filterMens, filterJewellery, filterElectronics
  ];
  filtersAll.forEach((section) => section.classList.remove("active"));

  const myPage = women.map((item) => {
    return renderItems(item);
  });

  document.getElementById("womens-items").innerHTML = myPage.join("");

}

//jewwllwery filtering


filterJewellery.addEventListener("click", displayJewellery);

function displayJewellery() {
  jewellerySection.style.display = "block";
  menSection.style.display = "none";
  womenSection.style.display = "none";
  // jewellerySection.style.display="none";
  electronicSection.style.display = "none";
  jewellerySection.classList.remove("hide-class");
  jewellerySection.classList.add("active");

  const allproducts = [menSection, womenSection, electronicSection];


  allproducts.forEach((section) => section.classList.add("hide-class"));

  const filtersAll = [
    filterAll, filterMens, filterWomen, filterElectronics
  ];
  filtersAll.forEach((section) => section.classList.remove("active"));

  const myPage = jewellery.map((item) => {
    return renderItems(item);
  });

  document.getElementById("jewellery-items").innerHTML = myPage.join("");

}


//electronics filter

filterElectronics.addEventListener("click", displayElectronics);

function displayElectronics() {
  electronicSection.style.display = "block";
  menSection.style.display = "none";
  womenSection.style.display = "none";
  jewellerySection.style.display = "none";
  // electronicSection.style.display="none";
  electronicSection.classList.remove("hide-class");
  electronicSection.classList.add("active");

  const allproducts = [womenSection, menSection, jewellerySection];


  allproducts.forEach((section) => section.classList.add("hide-class"));

  const filtersAll = [
    filterAll, filterMens, filterWomen, filterJewellery
  ];
  filtersAll.forEach((section) => section.classList.remove("active"));

  const myPage = electronics.map((item) => {
    return renderItems(item);
  });

  document.getElementById("electronics-items").innerHTML = myPage.join("");

}

//search



search.addEventListener("input", searchProducts);

function searchProducts() {
  const searchvalue = search.value.toLowerCase().trim();
  let searchResults = response.filter((item) => {
    item.title.toLowerCase().includes(searchvalue)
  });

  const allproducts = [womenSection, menSection, electronicSection, jewellerySection];


  allproducts.forEach((section) => section.classList.add("hide-class"));

  const filtersAll = [
    filterAll, filterMens, filterWomen, filterJewellery, filterElectronics
  ];
  filtersAll.forEach((section) => section.classList.remove("active"));

  console.log(searchResults)

  if (searchvalue !== "") {
    const searchHTML = searchResults.map((item) => renderItems(item));

    document.getElementById("searched-items").innerHTML = searchHTML.join("");
    searchFn.classList.remove("hide-class");
  }
  else {
    document.getElementById("searched-items").innerHTML = "No items found";
  }


  if (searchResults.length == 0) {
    document.getElementById("searched-items").innerHTML = "No items found";
  }


}

function renderItems(item) {
  return `<div class="item">
  <div id="image">
    <img src="${item.image}" alt="T-shirt Item">
  </div>

  <div class="info" id="div-info">
  <div class="title">${item.title.slice(0, 42)}...</div>
    <div class="row">
      <div class="price">$${item.price}</div>
      <div class="sizze">S,M,L</div>
    </div>
    <div class="colors">
      Ccolor:
      <div class="row">
        <div class="circle" style="background-color: #000;"></div>
        <div class="circle" style="background-color: #4938af;"></div>
        <div class="circle" style="background-color: #203d3e;"></div>
      </div>
    </div>
    <div class="row">Rating:${item.rating.rate}⭐</div>
  </div>
  <div id="btn-div">
    <button id="add" onclick="addtoCart(${item.id})">Add to Cart</button>
  </div>
</div>`;
}





function addtoCart(itemId) {
  console.log(itemId);
  let temp = response.filter((item) => {
    return item.id === itemId;
  });

  myCart.push(temp[0]);

  localStorage.setItem("cart", JSON.stringify(myCart));
}


rengeBar.addEventListener("input", applyFilter)

function applyFilter() {
  const rating = rengeBar.value;
  let results = response.filter((item) => {
    return Math.floor(item.rating.rate) == (rating)
  });


  const searchinP = results.map((item) => {
    renderItems(item)
  });
  document.getElementById("searched-items").innerHTML = searchinP.join("");
  searchFn.classList.remove("hide-class");
}



applyBtn.addEventListener("click", filterPrice)

function filterPrice() {
  // console.log("HELLO");
  let results = [];
  if (lowPrice.checked == true) {
    let temp = response.filter((item) => {
      return item.price <= 25.0
    })

    temp.forEach((item) => {
      results.push(item);
    })
  }

  if (mediumPrice.checked == true) {
    let temp = response.filter((item) => {
      return item.price >= 25.0 && item.price <= 50.0
    })

    temp.forEach((item) => {
      results.push(item);
    })
  }

  if (highPrice.checked == true) {
    let temp = response.filter((item) => {
      return item.price >= 50.0 && item.price <= 100.0
    })

    temp.forEach((item) => {
      results.push(item);
    })
  }
  if (veryHighPrice.checked == true) {
    let temp = response.filter((item) => {
      return item.price >= 100.0
    })

    temp.forEach((item) => {
      results.push(item);
    })
  }



  const searchinP = results.map((item) => {
    renderItems(item);
  })
  document.getElementById("searched-items").innerHTML = searchinP.join("");
  searchFn.classList.remove("hide-class");



  if (lowPrice.checked == false && mediumPrice.checked == false && highPrice.checked == false && veryHighPrice.checked == false) {
    document.getElementById("searched-items").innerHTML = ""
    searchFn.classList.add("hide-class");
  }
}



