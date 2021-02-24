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
    
}