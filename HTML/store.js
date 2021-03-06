if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)

}else{
    ready()
}
function ready(){


var removeCartItemsButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemsButtons)
for(var i = 0; i< removeCartItemsButtons.length; i++){
    var button = removeCartItemsButtons[i]
    button.addEventListener('click',function(event){
        var buttonClicked= event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for(var i=0; i<quantityInputs.length; i++){
    var input =quantityInputs[i]
    input.addEventListener('change',quantityChanged)


}
var addToCartButtons =document.getElementsByClassName('shop-item-btn')
for (var i=0 ; i<addToCartButtons.length;i++){
    var button=addToCartButtons[i]
    button.addEventListener('click',addToCartClicked)
}
function quantityChanged(event){
    var input=event.target
    if (isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event){
    var button=event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var img = shopItem.getElementsByClassName('shop-item-img')[0].src
    addItemTocart(title,price,img)
}
function addItemTocart(title,price,img){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i< cartItemNames.length;i++){
    if(cartItemNames[i].innerText==title){
        alert('this item is already added to the cart')
        return
    }}
    var cartRowContents=`
    <div class="cart-item cart-column">
                    <img class="cart-item-img" src="${img}" width="100" height="100">
                    <span class="carte-item-title">${title}</span>
                </div>
                
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">Remove</button>
                </div>`
    cartRow.innerHTML=cartRowContents            
    
    cartItems.append(cartRow)

}
}
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total=0
    for(var i = 0; i< cartRows.length; i++){
        var cartRow =cartRows[i]
        var priceElement=cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement =cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        
        var price=parseFloat(priceElement.innerText.replace('$',''))
        var quantity=quantityElement.value
        total= total+ (price*quantity)
        
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText='$'+total
    
}