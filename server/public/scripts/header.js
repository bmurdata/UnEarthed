// Header and div
const header= document.querySelector('header')

const headerContainer=document.createElement('div')
headerContainer.className='header-container'

const headerLeftContainer=document.createElement('div')
headerLeftContainer.className='header-left'

const imgContainer=document.createElement('img')
imgContainer.src='/logo.png'

const h1Container=document.createElement('h1')
h1Container.textContent='UnEarthed'
// Left have title and image
headerLeftContainer.appendChild(imgContainer)
headerLeftContainer.appendChild(h1Container)

const headerRightContainer=document.createElement('div')
headerRightContainer.className='header-right'

const headerBtn=document.createElement('button')
headerBtn.textContent = 'Home'
    
headerBtn.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRightContainer.appendChild(headerBtn)

headerContainer.appendChild(headerLeftContainer)
headerContainer.appendChild(headerRightContainer)

header.appendChild(headerContainer)