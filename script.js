const cities = [
    { name: "Boston", temperature: 71 },
    { name: "New York", temperature: 75 },
    { name: "New York", temperature: 75 },
    { name: "Los Angeles", temperature: 80 },
    { name: "Chicago", temperature: 65 },
    { name: "Houston", temperature: 90 },
    { name: "Denver", temperature: 45 }
];




let ul = document.querySelector("#cityList")

console.log(ul)
// ul.textContent = "hello wolrd"  // hello world
for (let city of cities){
    let cityName = city.name
    let temprature = city.temperature
    
    // ul.textContent = cityName +ul.textContent
    // let cityContent = `<li class="city">${cityName}</li>`
    // if(cityName === "boston"){
    //!can't do that with inner html easily
    //     //add red color to the font
    // }
    // ul.innerHTML  = ul.innerHTML + cityContent 

   let li= document.createElement("li")
   li.textContent = cityName 
   if(cityName === "Boston"){
    li.style.fontSize = "36px"
   }

   li.classList.add("city")

   let tempLi = document.createElement("p")

   templLi.textContent = "temperature: "+ city.temperature
   
   
    ul.append(li)
    ul.append(tempLi)
  

}
