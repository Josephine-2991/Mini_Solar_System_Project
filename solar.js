// alert('love')
const button = document.querySelector('.btn')
const mass = document.querySelector('.mass')
const select = document.querySelector('.select')
const select1 = document.querySelectorAll('.select')
const imageEl= document.querySelector(".image");
const massEmpty = document.querySelector(".massempty");
const trasparent = document.querySelector(".trasparent");
const weightCal = document.querySelector(".circle-input");
const main = document.querySelector(".main");
const acc = document.querySelector(".acc");
const circle = document.querySelector(".circle");
const sec = document.querySelector("section");

const weight1 = document.querySelector(".weight");
console.log(weight1)
let planets={
    
        "MERCURY": { image: "./images/mercury.png", acc: 5 },
        "VENUS": { image: "./images/venus.png", acc: 8 },
        "EARTH": { image: "./images/earth.png", acc: 7 },
        "MOON": { image: "./images/moon.png", acc: 9 },
        "MARS": { image: "./images/mars.png", acc: 10 },
        "JUPITER": { image: "./images/jupiter.png", acc: 11 },
        "SATURN": { image: "./images/saturn.png", acc: 13 },
        "URANUS": { image: "./images/uranus.png", acc: 33 },
        "NEPTUNE": { image: "./images/neptune.png", acc: 2 },
        "PLUTO": { image: "./images/pluto.png", acc: 4 }
    
}

createSelectOptions()
function createSelectOptions() {
    // planets.forEach(planet => {
    // })

    for(let planet in planets) {
        const option = document.createElement("option");
        // option.classList.add("uppercase")
        option.innerHTML = planet;
        // option.value = planet;
        select.appendChild(option);
        
    }
}


 function clickBtn(){
    
     const mass1 = mass.value;
    const planet = select.value;
    console.log({planet, mass1})
     const image = planets[planet]?.image || "";
      const acc1 = planets[planet]?.acc || 0;

       

    let mass2 = +mass1
    if (mass2 && image && acc1) {
       
       
        weight1.classList.contains("tidy") ? weight1.classList.remove("tidy") : console.log(false)
        console.log(weight1);
           let weight = mass2 * acc1
           weightCal.value = weight +".00"
           imageEl.setAttribute("src", image)
           acc.innerHTML = `The weight of the object on ${planet}`   

     }

     else if(!mass2 && !image){
        weight1.classList.contains("tidy") ? weight1.classList.remove("tidy") : console.log(false)
            acc.innerHTML = `Mass is required`
           trasparent.removeChild(imageEl)
           weight1.removeChild(circle)   

     }
    else if (mass2 && !image) {
        weight1.classList.contains("tidy") ? weight1.classList.remove("tidy") : console.log(false)
        acc.innerHTML = `You did not choose a planet`
        trasparent.removeChild(imageEl)
        weight1.removeChild(circle)

    }

    //  else if (!mass1) {
    //     acc.innerHTML= 'Mass is required';
       
    
    // }
    //  else if (mass1 != '' && planet =='--select planet--') {
    //      massEmpty.innerHTML = 'select is required'
    //      imageEl.setAttribute("src", '');
    //  }

    //  else if (mass1 == '') {
    //      massEmpty.innerHTML = 'Mass is required'
    //      imageEl.setAttribute("src", '');
    //      trasparent.classList.remove('trasparent', 'none');
    //  }
      
    


    
    
     
 

 }
 

button.addEventListener('click', clickBtn)
