const sponsers = [
    {
        name: `walks on's  Walk-On's Bistreaux and Bar`,
        img: 'img/walkonsBar.png',
        description: `<p>There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering.Cajun cuisine to life in every restaurant. Whether you’re here for dinner with the family, date night, cocktails with the girls, or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.</p><br><p>1009 Poydras St
        New Orleans, LA 70112
        504 - 309 - 6530</p>
        <h4>Hours</h4><br><p style="text-align="center">
Sun- Thurs: 11am - 11pm<br>
Fri - Sat: 11am - Midnight</p>`
        ,
        link: 'https://walk-ons.com/'
    },
    {
        name: "Sheraton New Orleans Hotel",
        img: 'img/sheratonhotel.png',
        description: 'Bringing people together is what we’ve done since opening our first Sheraton in 1937. Now we’re deeply rooted in over 400 communities across the globe. We are proud to act as a point of connection for millions of travelers, many just like you. Welcome.'
        ,
        link: 'https://www.tripadvisor.com/Hotel_Review-g60864-d89130-Reviews-Sheraton_New_Orleans_Hotel-New_Orleans_Louisiana.html'
    },
    {
        name: `Ace Hotel New Orleans`,
        img: 'img/Ace Hotel.png',
        description: `A stone’s throw from the French Quarter, in the soul of the Deep South.`
        ,
        link: 'https://acehotel.com/new-orleans/'
    },
    {
        name: `The Ritz-Carlton, New Orleans`,
        img: 'img/ritzCarelton.png',
        description: `within a historic beaux arts building in new orleans’ french quarter, a hotel offers luxury with a local touch.`
        ,
        link: 'https://www.ritzcarlton.com/en/hotels/new-orleans'
    },
    {
        name: `Premium Parking - P402`,
        img: 'img/PremiumParking.png',
        description: `
local parking place - under the known company of premium parking`
        ,
        link: 'https://www.premiumparking.com/P402'
    },
    {
        name: `Louisiana Children's Museum`,
        img: 'img/LCM.png',
        description: `
When you make a child's potential visible, wonderful things happen.`
        ,
        link: 'https://lcm.org/'
    },
    {
        name: `Museum of Death`,
        img: 'img/museumofdeath.png',
        description: `
The World Famous Museum of Death was founded in 1995 to fill the void in death education in the USA.`
        ,
        link: 'img/museumofdeath.png'
    },
    {
        name: `Haunted Museum`,
        img: 'img/hauntedMuseum.png',
        description: `
Haunted museum & Voodoo spirit shop in a documented 200 year old French Quarter Haunted House! Museum tours by day, Ghost Hunts by night!`
        ,
        link: 'https://www.tripadvisor.com/Attraction_Review-g60864-d12895811-Reviews-Haunted_Museum-New_Orleans_Louisiana.html'
    },
]

const popUp = document.querySelector('.popup')

let cards = document.querySelectorAll('.card')

let i = 0

cards.forEach(card => {
    card.setAttribute("onclick", `displayCardPopUp(${i})`)
    i++
})


function displayCardPopUp(index) {
    popUp.innerHTML = `
    <div class="close">X</div>
    <h2>${sponsers[index].name}</h2>
    <hr>
    <img src="${sponsers[index].img}">
    <div>${sponsers[index].description}</div>
    <a target="_blank" href="${sponsers[index].link}">VISIT</a>`;
    popUp.style.display = 'block'
    const X = document.querySelector('.popup .close')
    console.log(X);
    X.addEventListener('click', () => {
        popUp.style.display = 'none'
    })
}


