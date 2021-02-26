var ctx = document.getElementById('myChart').getContext('2d');
const date_table=document.querySelector('table')

const bitcoin_img=document.createElement('img')
const description=document.getElementById('description_content')
const bitcoin_heading=document.createElement('h1')
const coin_date_=document.getElementById('date_input');

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


const contentdiv_1=document.getElementById('left_label_coin_desc')
const contentdiv_2=document.getElementById('right_label_coin_desc')
const curr_desc_img=document.getElementById('midea_2_id')
// 
const coin_id="ethereum"
// 

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
        // console.log(coin_id.market_data.current_price)
        const coin_date_desc=coin_id.market_data.current_price
        const keys=Object.values(coin_date_desc)
        console.log(keys)
        for(index=0;index<keys.length;index++){
            
            const p=document.createElement('li')
            p.innerHTML+=keys[index]
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
        description.innerHTML=coin_id.description.en
        
        
        coin_desc1.innerHTML=`market cap :- Rank #${coin_id.market_cap_rank}`
        coin_desc2.href=coin_id.links.repos_url.github[0]
        coin_desc2.innerHTML=`Git-Hub: ${coin_id.links.repos_url.github[0]}`
        coin_desc9.innerHTML=  `hashing_algorithm: ${coin_id.hashing_algorithm}`
        // the left div
        coin_desc3.innerHTML=`coingecko_score<br> <strong>${coin_id.coingecko_score}</strong>`
        coin_desc4.innerHTML=`developer_score <br> <strong>${coin_id.developer_score}</strong>`
        coin_desc5.innerHTML=`community_score <br> <strong>${coin_id.community_score}</strong>`
        oin_desc6.innerHTML=`price_change_24h <br> <strong>${coin_id.market_data.price_change_24h}</strong>`
        coin_desc7.innerHTML=`price_change_percentage_24h <br> <strong>${coin_id.market_data.price_change_percentage_24h}</strong>`
        coin_desc8.innerHTML=`price_change_percentage_7d <br> <strong>${coin_id.market_data.price_change_percentage_7d}</strong>`
    }