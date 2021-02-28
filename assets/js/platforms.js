
let container = document.querySelector('.container');


fillPlatforms();
async function getPlatforms(){

    let response = await fetch('https://api.coingecko.com/api/v3/finance_platforms');

    let data = await response.json();

    return data;
}