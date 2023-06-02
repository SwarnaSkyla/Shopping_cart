
const cartsection=document.getElementById("carts");

let cartItems=JSON.parse(localStorage.getItem("cart"));

console.log(cartItems);

function calculateTotalPrice(){
    let totalPrice=0
    cartItems.map((item)=>{
        totalPrice+=item.price
    });


    let presentLoginedUser=JSON.parse(localStorage.getItem("presentLoginedUser"))

    presentLoginedUser.totalPrice=totalPrice.toFixed(2)


    localStorage.setItem("presentLoginedUser",JSON.stringify(presentLoginedUser))


    document.getElementById("total-price").innerHTML="$"+totalPrice.toFixed(2)

}
calculateTotalPrice()


function renderList(){
    const searchP2=cartItems.map((item)=>{
        renderCost(item)
    });
    document.getElementById("items-list").innerHTML=searchP2.join("");
    
}
renderList()


function renderCost(item){
    return `
    <div id="itemOfList">
    <div>${item.title.slice(0,20)}...</div>
    <div>$${item.price}</div>
    </div>`
}


function renderCart(){
    const searchinP=cartItems.map((item)=>{
        renderItems(item)
    });
    document.getElementById("cart-items").innerHTML=searchinP.join("");
}
renderCart()

function renderItems(Item) {

    return `
    <div class="item">
    <div id="image-1">
      <img src="${Item.image}" alt="T-shirt Item">
    </div>
  
    <div class="info" id="div-info">
    <div class="title">${Item.title}</div>
      <div class="row">
        <div class="price">$${Item.price}</div>
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
      <div class="row">Rating:${Item.rating.rate}⭐</div>
    </div>
    <div id="btn-div">
      <button id="add" onclick="removeItems(${Item.id})">Remove from Cart</button>
    </div>
  </div>`;
  }




  function removeItems(id){
    cartItems=cartItems.filter((item)=>{
        return item.id!=id
    })


    localStorage.setItem("cart",JSON.stringify(cartItems))
    renderCart()
    renderList()
    calculateTotalPrice()
  }


    document.getElementById("pay-btn").addEventListener("click",()=>{
        localStorage.setItem("cart",JSON.stringify([]))
        alert("Items are purchased")
        window.location.href="../razorpay/index.html"
    })
  