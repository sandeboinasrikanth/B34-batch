// let countriesInfo = [
//     {
//       name: "India",
//       population: " 1,394,975,829",
//       region: "Asia",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//       capital: "New delhi"
//     },
//     {
//       name: "Germany",
//       population: "81,770,900",
//       region: "Europe",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//       capital: "Berlin"
//     },
//     {
//       name: "United states",
//       population: "323,947,000",
//       region: "Americas",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
//       capital: "Washington D.C"
//     },
//     {
//       name: "Brazil",
//       population: "206,135,893",
//       region: "Americas",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
//       capital: "Brasilia"
//     },
//     {
//       name: "Iceland",
//       population: "334,300",
//       region: "Europe",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
//       capital: "Reykjavik"
//     },
//     {
//       name: "India",
//       population: " 1,394,975,829",
//       region: "Asia",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//       capital: "New delhi"
//     },
//     {
//       name: "Germany",
//       population: "81,770,900",
//       region: "Europe",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//       capital: "Berlin"
//     },
//     {
//       name: "United states",
//       population: "323,947,000",
//       region: "Americas",
//       flag:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
//       capital: "Washington D.C"
//     }
//   ];


/*
  //Dry code -> Don't repeat yourself
  const countryInfoContainer = document.createElement('div');
  countryInfoContainer.className = 'info';

  const countryName = document.createElement('h2');
  countryName.innerText = "India";


  const population = document.createElement('p');
  population.innerText = 'population: 1,394,975,829';

  const region = document.createElement('p');
  region.innerText = 'region: Asia';

  const capital = document.createElement('p');
  capital.innerText = 'capital: New Delhi';
  
 
  countryInfoContainer.append(countryName, population,region,capital);
  document.body.append(countryInfoContainer);

  */

  //  append       - can add only one child at a time.
//  appendChild  - can add multiple child at a time. 

// const country ={
//     name: "Germany",
//     population: "81,770,900",
//     region: "Europe",
//     flag:
//     "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//     capital: "Berlin"    
// }

function createCountry(country){
    const countryContainer = document.createElement("div");
    countryContainer.className = 'container';

    countryContainer.innerHTML = `
    <img
    class='flag'
    src='${country.flag}',
    alt="${country.name}"
    />
    <div class="info">
    <h2>${country.name}</h2>
    <p><strong>Population:</strong>${country.population}</p>
    <p><strong>Region:</strong>${country.population}</p>
    <p><strong>Capital:</strong>${country.capital}</p>
    </div>
    `

    document.body.append(countryContainer)

}

// for(var i in countriesInfo){
//   createCountry(countriesInfo[i])
// }

//task - load 250 countries on screen
const getCountries =()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");  // open
    xhr.send();  //send
    xhr.responseType = "json";   //data format
    xhr.onload = () =>{
       const countries = xhr.response;
       for(let country of countries){
        const countryAdapter = {
            name: country.name.common,
            flag: country.flags.svg,
            population:country.population,
            region:country.region,
            capital:country.capital,

        }
        // createCountry(country)
        createCountry(countryAdapter)
    }
       

    } 
};
getCountries();  
