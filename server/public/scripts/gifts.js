// Get data from gifts endpoint and display data on client

const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()
    const mainContent=document.getElementById('main-content')
    if(data){
        data.map(gift => {
            // Map gift data items and append to a card
            const giftDataCard=document.createElement('div')
            giftDataCard.className='card'
            
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage=`url(${gift.image})`
            const name=document.createElement('h3')
            name.textContent=gift.name
            bottomContainer.appendChild(name)
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)

            giftDataCard.appendChild(topContainer)
            giftDataCard.appendChild(bottomContainer) 
            mainContent.appendChild(giftDataCard)
        })

    }
    else {
        const errorH2=document.createElement('h2')
        errorH2.textContent='No Gifts Available.'
        mainContent.appendChild(errorH2)
    }
}
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderGifts()
  }