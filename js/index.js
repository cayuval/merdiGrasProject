const sponsers = [
    {
        name: `walks on's  Walk-On's Bistreaux and Bar`,
        img: 'img/walkonsBar.png',
        description: `<p>There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering.Cajun cuisine to life in every restaurant. Whether you’re here for dinner with the family, date night, cocktails with the girls, or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.</p><br>`
        ,
        location: `1009 Poydras St
        New Orleans, LA 70112`,
        hours:`Sun- Thurs: 11am - 11pm<br>
Fri - Sat: 11am - Midnight`,
link: 'https://walk-ons.com/'
},
{
    name: "Sheraton New Orleans Hotel",
    img: 'img/sheratonhotel.png',
    description: 'Bringing people together is what we’ve done since opening our first Sheraton in 1937. Now we’re deeply rooted in over 400 communities across the globe. We are proud to act as a point of connection for millions of travelers, many just like you. Welcome.'
    ,
    location:'500 Canal Street, New Orleans, LA 70130',
    hours:`24/7`,
    link: 'https://www.tripadvisor.com/Hotel_Review-g60864-d89130-Reviews-Sheraton_New_Orleans_Hotel-New_Orleans_Louisiana.html'
},
{
    name: `Ace Hotel New Orleans`,
    img: 'img/Ace Hotel.png',
    description: `A stone’s throw from the French Quarter, in the soul of the Deep South.`
    ,
    location: `600 Carondelet St, New Orleans, Louisiana`,
    hours:`24/7`,
    link: 'https://acehotel.com/new-orleans/'
},
{
    name: `The Ritz-Carlton, New Orleans`,
    img: 'img/ritzCarelton.png',
    description: `within a historic beaux arts building in new orleans’ french quarter, a hotel offers luxury with a local touch.`
    ,
    location:`921 Canal Street
New Orleans, LA `,
    hours:`24/7`,
    link: 'https://www.ritzcarlton.com/en/hotels/new-orleans'
},
{
    name: `Premium Parking - P402`,
    img: 'img/PremiumParking.png',
    description: `
    local parking place - under the known company of premium parking`
    ,
    location:`300 N Peters St, New Orleans, LA 70130
`,
    hours:`24/7`,
    link: 'https://www.premiumparking.com/P402'
},
{
    name: `Louisiana Children's Museum`,
    img: 'img/LCM.png',
    description: `
    When you make a child's potential visible, wonderful things happen.`
    ,
    location:`City Park New Orleans
15 Henry Thomas Drive
New Orleans, LA 70124`,
    hours:`Tues- 
    Satu: 9:30am - 4:30pm<br>
    Sund: 11:30am - 4:30pm`,
    link: 'https://lcm.org/'
},
{
    name: `Museum of Death`,
    img: 'img/museumofdeath.png',
    description: `
    The World Famous Museum of Death was founded in 1995 to fill the void in death education in the USA.`
    ,
    location:`227 Dauphine St, New Orleans, LA 70112`,
    hours:`Fri-Thur 10am - 6pm`,
    link: 'http://www.museumofdeath.net/'
},
{
    name: `Haunted Museum`,
    img: 'img/hauntedMuseum.png',
    description: `
    Haunted museum & Voodoo spirit shop in a documented 200 year old French Quarter Haunted House! Museum tours by day, Ghost Hunts by night!`
    ,
    location:`826 & 828 N. Rampart Street Enter In On Spirt Gift Shop Side, New Orleans, LA 70116`,
    hours:`Fri-Satu 12pm - 6pm <br>Sund-Thur 12pm - 5pm`,
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
    <br>
    <p></p>
    <h4 style="text-align:center">Location</h4>
    <hr>
    <div>${sponsers[index].location}</div>
    <br>
    <h4 style="text-align:center">HOURS</h4>
    <hr>
    <div>${sponsers[index].hours}</div>
    <br>
    <a target="_blank" href="${sponsers[index].link}">VISIT LINK</a>`;
    popUp.style.display = 'block'
    const X = document.querySelector('.popup .close')
    console.log(X);
    X.addEventListener('click', () => {
        popUp.style.display = 'none'
    })
}


