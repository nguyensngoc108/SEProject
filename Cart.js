var removeCartItemButton = document.getElementsByClassName('fas fa-trash-alt')
console.log(removeCartItemButton)
for (var i = 0; i < removeCartItemButton.length; i++) {
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        var cartItem = buttonClicked.parentElement.parentElement.parentElement
        cartItem.remove()
        updateCartTotal()
        
    })
    
}


function updateCartTotal(){
    var cartItemContainer =  document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('w-25-pl-1')[0]
       

        console.log(priceElement, quantityElement)
    }
}
