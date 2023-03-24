//a.Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);

    var res1 = res.filter((ae) => ae.region == "Asia");
    console.log(res1);
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);

    var res1 = res.filter((ae) => ae.population < 200000);
    console.log(res1);
}

//c.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    console.log(res);
     res.forEach(element => {
        console.log(element.name + "," + element.region + "," + element.flag)
    });
}


//d.Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    var result = res.reduce((acc, cv) => acc + cv.population, 0);
    console.log(result)
}

// //e.Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    console.log(res);
 res.filter(element => {
        for (let key in element.currencies) {
           
            if (element.currencies[key].code === "USD") {
                console.log(element.name)
            }
        }
    })
}
