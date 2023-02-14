// solving problems using array function on the rest countries Data

// a. get all the countries from Asia continent/region using filter function

// var nam = new XMLHttpRequest();
// nam.open("GET","https://restcountries.com/v3.1/all");
// nam.send();
// nam.onload = function(){
//     var data = nam.response;
//     var result = JSON.parse(data);
//     // console.log(result);
//     var output = result.filter((a) => a.region === "Asia")
//     console.log(output)
// }

// b. get all the countries with population of less than 2 lakhs using filter funtion

// var pop = new XMLHttpRequest();
// pop.open("GET","https://restcountries.com/v3.1/all");
// pop.send();
// pop.onload = function(){
//     var data = pop.response;
//     var result = JSON.parse(data);
//     var output = result.filter((a) => a.population < 200000)
//     console.log(output)
// }


// c. print the following details name,capital,flag using forEach function

    // var details = new XMLHttpRequest();
    // details.open("GET","https://restcountries.com/v3.1/all");
    // details.send();
    // details.onload = function(){
    //     var data = details.response;
    //     var result = JSON.parse(data);
    //     // console.log(result);
    //     result.forEach((a) => console.log(a.name,a.capital,a.flag));
    //     }

// d. print the total population of countries using reduce function

// var details = new XMLHttpRequest();
// details.open("GET","https://restcountries.com/v3.1/all");
// details.send();
// details.onload = function(){
//     var data = details.response;
//     var result = JSON.parse(data);
//     console.log(result);
//     result.reduce((a) => {
//         var sum = 0;
//         sum = sum + a.population
//         console.log(sum)    
//     })
//     }

// e. print the country which use US Dollors as currency

var cur = new XMLHttpRequest();
cur.open("GET","https://restcountries.com/v2/all")
cur.send();
cur.onload = function(){
    var data = cur.response;
    var result = JSON.parse(data);
    var output = result.filter((a) =>{
        for(var i in a.currencies){
            if(a.currencies[i].code==="USD"){
                console.log(a.name)
            }
        }
    })
}
