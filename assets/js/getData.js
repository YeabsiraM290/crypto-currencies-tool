//Getting necessaru html tags
let btc = document.querySelector('.btc');
let eth = document.querySelector('.eth');
let ltc = document.querySelector('.ltc');
let ada = document.querySelector('.ada');
let tabel = document.querySelector('.tabelBody');

useData();
createTabel();

//defining fetch function
async function getPrice(){

        let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

        let data = await response.json();
    
        return data;
}

//defining function to consume data
function useData(){

   
    getPrice().then(function(coinList) {
        
        coinList.forEach(function(coin) {

            if(coin.symbol == 'btc'){

                btc.innerHTML = `  Price: ${coin.current_price}$ <br>
                24H: ${coin.market_cap_change_percentage_24h} <br>
                Market Cap: ${coin.market_cap}`
              
            }

            else if(coin.symbol == 'eth'){

                eth.innerHTML = `  Price: ${coin.current_price}$ <br>
                24H: ${coin.market_cap_change_percentage_24h} <br>
                Market Cap: ${coin.market_cap}`
              
            }

            else if(coin.symbol == 'ltc'){

                ltc.innerHTML = `  Price: ${coin.current_price}$ <br>
                24H: ${coin.market_cap_change_percentage_24h} <br>
                Market Cap: ${coin.market_cap}`
              
            }

            else if(coin.symbol == 'ada'){

                ada.innerHTML =
                
                
                `  Price: ${coin.current_price}$ <br>
                24H: ${coin.market_cap_change_percentage_24h} <br>
                Market Cap: ${coin.market_cap}`
              
            }


            });

 
        })

        .catch(function(err) {

            console.log(err)

        });

}

function createTabel(){

    getPrice().then(function(coinList){

        let outPut="";
        let counter=0;

        coinList.forEach(function(coin){
            console.log(counter)
            counter+=1
        outPut+=`
      <tr>
            <td>${counter}</td>
            <td><img class="ml-3 mr-3" src="${coin.image}" width=20px height=20px">${coin.name}</td>
           <td>${coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td>${coin.price_change_24h}</td>
            <td>${coin.low_24h}</td>
            <td>${coin.market_cap}</td>
        </tr>`
        
    });
    tabel.innerHTML=outPut;

    $(document).ready(function() {
        $('#example').DataTable();
    } );
    

})

.catch(function(err) {

    console.log(err)

});
    
}

