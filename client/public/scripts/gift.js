

const renderGift=async ()=>{
    const requestID=parseInt(window.location.href.split('/').pop())
    const giftDataJson = await fetch('/gifts')
    const data = await giftDataJson.json()
    const giftContent=document.getElementById('gift-content')

    let gift
    // Find the gift by ID
    if (data){
        gift=data.find(gift=>gift.id==requestID)
        if(gift){
            document.getElementById('image').src = gift.image
            document.getElementById('name').textContent = gift.name
            document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
            document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
            document.getElementById('audience').textContent = 'Great For: ' + gift.audience
            document.getElementById('description').textContent = gift.description
            document.title = `UnEarthed - ${gift.name}`
        }
        else{
            const errorMsg=document.createElement('h2')
            errorMsg.textContent='No Gift with that ID'
            giftContent.appendChild(errorMsg)
        }
    }
    else{

    }
}

renderGift()