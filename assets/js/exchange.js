let container = document.querySelector('.container');

createExchangeList();
async function getExchanges(){

    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    let data = await response.json();

    return data;
}