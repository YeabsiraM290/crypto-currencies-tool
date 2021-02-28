
let container = document.querySelector('.container');


fillPlatforms();
async function getPlatforms(){

    let response = await fetch('https://api.coingecko.com/api/v3/finance_platforms');

    let data = await response.json();

    return data;
}
function fillPlatforms(){

    getPlatforms().then(function(platforms) {
        let outPut="";
        platforms.forEach(function(platform) {

            outPut+=`
            <a href="${platform.website_url}">
            <div class="row platRow mb-1">

            <div class="col-4 mt-4"><b>Name</b>: ${platform.name}</div>
            
            <div class="col-4 mt-4"><b>Centeralized</b>: ${platform.centralized}</div>
             
            <div class="col-4 mt-4"><b>Category</b>: ${platform.category}</div>

            </div></a>`
    
            });
            container.innerHTML = outPut;
        })
        .catch(function(err) {

            console.log(err)

        });
}
        