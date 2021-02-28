//ui components
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector(".search");
const suggBox = document.querySelector(".autocom-box");
const icon = document.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");

//direct page url and coin list array
let url;
let suggestions = []

//to get all coins from api
fillList();
async function getlist(){

    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    let data = await response.json();

    return data;
}

//filling suggestions for search comparision
function fillList(){

    getlist().then(function(coinList) {

        coinList.forEach(function(coin) {
                suggestions.push(coin.name);
    
            });
 
        })
        .catch(function(err) {

            console.log(err)

        });
}
