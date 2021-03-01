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

//runs when anything written in search bar
inputBox.onkeyup = (e)=>{

    let userData = e.target.value; 
    let emptyArray = [];

    if(userData){

        icon.onclick = ()=>{

            url = `cur_desc.html?id=${useData.toLocaleLowerCase()}`;
            linkTag.href = url;
            linkTag.click();
        }

        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });

        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });

        searchWrapper.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");

        for (let i = 0; i < allList.length; i++) {

            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{

        searchWrapper.classList.remove("active"); 
    }
}

//to make suggested li clickable 
function select(element){

    let selectData = element.textContent;
    inputBox.value = selectData;

    icon.onclick = ()=>{

        url = `cur_desc.html?id=${selectData.toLocaleLowerCase()}`;
        linkTag.href = url;
        linkTag.id = "1"
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
    return selectData;
}

//fills suggbox with suggestion if any
 function showSuggestions(list){

    let listData = "No result";

    if(!list.length){

        userValue = inputBox.value;

        if(userValue in suggestions){

            listData = '<li>'+ userValue +'</li>'
            url = `cur_desc.html?id=${selectData.toLocaleLowerCase()}`;
            linkTag.href = url;
            linkTag.target = "submit"
        }

        else{

            url = `index.html`;
            linkTag.href = url
            linkTag.target = "";
        }
        
    }else{

        listData = list.join('');
    }

    suggBox.innerHTML = listData;
}
