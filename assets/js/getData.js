let tabel = document.querySelector('.tabelBody');


let coinContainer = document.querySelector('.insideCon');
useData();
createTabel();

//defining fetch function
let anyinDb= loadfromDB();
if(!anyinDb){
    addToDatabase(['btc','eth','usdt','bnb'])
    anyinDb=loadfromDB();
}

else{

    
}

function addToDB(coin){

    let coins = loadfromDB();
   

    if(!coins){
        coins = [coin]
        addToDatabase(coin)
     }
    else{
        coins = coins[0]
        coins.push(coin);
        addToDatabase(coins);
    }
}




// Add to LocalStorage function declaration 
function addToDatabase(newCoin)
{
   let listofCoin;
   if(localStorage.getItem('coins') == null)
   {
    listofCoin = [];
   }
   else
   {
    listofCoin = JSON.parse(localStorage.getItem('coins'));
   }
   listofCoin.push(newCoin);
    localStorage.setItem('coins', JSON.stringify(listofCoin));
}

function loadfromDB()
{
    let listofTasks;
    if(localStorage.getItem('coins') == null)
    {
        false
    }
    else
    {
        listofTasks = JSON.parse(localStorage.getItem('coins'));
        return listofTasks; 
    }
   
}

function unPin(e){

    console.log(e)
    removefromDB(e)
}



function removefromDB(coin) {

    let listofCoins;
    if (localStorage.getItem('coins') == null) {
        listofCoins = [];
    } else {
        listofCoins = JSON.parse(localStorage.getItem('coins'));
    }
    listofCoins[0].forEach(function(task, index) {
        console.log(task)
        if (coin.textContent.trim() === task.trim())
        listofCoins[0].splice(index, 1);
    });
    localStorage.setItem('coins', JSON.stringify(listofCoins));

}


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
            counter+=1
        outPut+=`
      <tr>
            <td onClick=addToDB("${coin.symbol}")><i class="fas fa-thumbtack"></i> ${counter}</td>
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

