
var ctx = document.getElementById('myChart').getContext('2d');
const date_table=document.querySelector('table')


const ohter=document.getElementById('ohter')
const bitcoin_img=document.createElement('img')
const description=document.getElementById('description_content')
const bitcoin_heading=document.createElement('h1')
const coin_date_=document.getElementById('date_input');
const date_based=document.getElementById('date_basedd');

const coin_desc1=document.createElement('p')
const coin_desc2=document.createElement('a')
const coin_desc3=document.createElement('p')
const coin_desc4=document.createElement('p')
const coin_desc5=document.createElement('p')
//the next div
const coin_desc6=document.createElement('p')
const coin_desc7=document.createElement('p')
const coin_desc8=document.createElement('p')
const coin_desc9=document.createElement('p')
const coin_desc10=document.createElement('p')
const coin_desc11=document.createElement('p')
const p_decription=document.createElement('p')



const contentdiv_1=document.getElementById('left_label_coin_desc')
const contentdiv_2=document.getElementById('right_label_coin_desc')
const curr_desc_img=document.getElementById('midea_2_id')
// 
// const coin_id="ethereum"
// 
const queryString = window.location.search;
console.log(queryString);
var coin_id= queryString.slice(4,20)
// console.log(ermias)
//
// buttons
console.log(date_based)
function date_provier(){
    console.log(coin_date_.value)
    const year=coin_date_.value.slice(0,4)
    const month=coin_date_.value.slice(4,8)
    const day=coin_date_.value.slice(8,10)
    const date= day+month+year
    console.log(date)
    return date
    

}
const coin_date_button=document.getElementById('date_button')
coin_date_button.addEventListener("click",curr_date_value)
document.addEventListener("DOMContentLoaded", () => {
    coingeko_check();
    
    // table_fech();
    
});
function curr_date_value(){
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}/history?date=${date_provier()}`)
    .then(function(res){
        return res.json();
    })
    .then(function(coin_id){
         
        date_based.style.height="34rem"
        date_based.style.borderRadius="1rem"
        date_based.style.overflow="hidden"
        date_based.style.overflowX="scroll"
        date_based.style.overflowY="scroll"
        
        
        const date_image=document.createElement('img');
        const date_title=document.createElement('p')
        date_title.innerHTML="current_price"
        date_title.style.marginLeft="4rem"

        const coin_date_desc=coin_id.market_data.current_price
        const values=Object.keys(coin_date_desc)
        const keys=Object.values(coin_date_desc)
        console.log(keys)
        date_image.src=coin_id.image.thumb
        date_table.append(date_image,date_title)
        
        date_image.style.marginLeft="7rem"
        for(let index=0;index<keys.length;index++){
            
            const p=document.createElement('li')
            p.innerHTML+=`${values[index]}:-${keys[index]}`
            console.log(p)
            
            date_table.append(p)
            

          

        }
       
        console.log(coin_date_desc)

    })
    .catch(function(err) {

        console.log(err)

    });
}

function coingeko_check(){
    // coin will set by coin_id
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}`)
    .then(function(res){
     return res.json();
    })
    .then(function(coin_id){
        // console.log(coin_id)

        // inserting image in to the label
        bitcoin_img.src=coin_id.image.large
        // console.log(bitcoin_img)

        // inserting the the crypto-description
        p_decription.innerHTML=coin_id.description.en
        description.append(p_decription)
        console.log(p_decription)
        
        
        coin_desc1.innerHTML=`market cap :- Rank #${coin_id.market_cap_rank}`
        coin_desc2.href=coin_id.links.repos_url.github[0]
        coin_desc2.innerHTML=`Git-Hub: ${coin_id.links.repos_url.github[0]}`
        coin_desc9.innerHTML=  `hashing_algorithm: ${coin_id.hashing_algorithm}`
        coin_desc10.innerHTML= `sentiment_votes_up_percentage: ${coin_id.sentiment_votes_up_percentage}`
        coin_desc11.innerHTML= `genesis_date: ${coin_id.genesis_date}`
        // the left div
        coin_desc3.innerHTML=`coingecko_score<br> <strong>${coin_id.coingecko_score}</strong>`
        coin_desc4.innerHTML=`developer_score <br> <strong>${coin_id.developer_score}</strong>`
        coin_desc5.innerHTML=`community_score <br> <strong>${coin_id.community_score}</strong>`

        // the right div
        coin_desc6.innerHTML=`price_change_24h <br> <strong>${coin_id.market_data.price_change_24h}</strong>`
        coin_desc7.innerHTML=`price_change_percentage_24h <br> <strong>${coin_id.market_data.price_change_percentage_24h}</strong>`
        coin_desc8.innerHTML=`price_change_percentage_7d <br> <strong>${coin_id.market_data.price_change_percentage_7d}</strong>`
        
        const market=coin_id.market_data.price_change_24h_in_currency;
        // adding the graph
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ['aed', 'ars', 'aud', 'bch', 'bdt', 'bhd', 'bmd','bnb','brl','btc','btc','cad'],
                datasets: [{
                    label: 'price_change_percentage_1h_in_currency',
                    Color: '#322525',
                    borderColor: '#322525',
                    data: [ market.aed,market.ars,market.aud, market.bch,-market.bdt,market.bhd,market.bmd,market.bnb,market.brl,market.btc,market.cad,market.chf]
                }]
            },
        
            // Configuration options go here
            options: {}
            // end
    
        });


        console.log(coin_desc6)
        // coin_desc2.innerHTML=`market_cap_rank${markets[0].market_cap_rank}`
        // bcoin_desc3.innerHTML=`last_updated${markets[0].last_updated}`
        // coin_desc4.innerHTML=`ath_change_percentage${markets[0].ath_change_percentage}`

        // main_desc_under_the image
    curr_desc_img.append(bitcoin_img)
    curr_desc_img.append(coin_desc1,coin_desc9,coin_desc10,coin_desc11,coin_desc2)
    ohter.append(description)
    
    // right_desc_aside image
    
    contentdiv_1.append(coin_desc3,coin_desc4,coin_desc5)
    contentdiv_2.append(coin_desc6,coin_desc7,coin_desc8)
   
    


        
        
        
        

    })
    .catch(function(err) {

        console.log(err)

    });
    


   
    
}
