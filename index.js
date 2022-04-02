const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        'X-RapidAPI-Key': '09668cd7admshefc234a266c2907p1e4d2ejsne787cb53ab0f'
    }
};

let current = 0;

async function pageReload() {
    try {
        const showPrice = document.getElementById("bitcoin");
        let response = await fetch('https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD', options);
        let data = await response.json();
        let pastValue = parseInt(data["Realtime Currency Exchange Rate"]["8. Bid Price"], 10);
        showPrice.innerHTML = pastValue;
        if (current > pastValue) {
            showPrice.style.color = 'green';
        } else if (current == pastValue) {
            showPrice.style.color = 'grey';
        } else if (current < pastValue) {
            showPrice.style.color = 'red';
        }
        current = pastValue;
    } catch (e) {
        console.log(e);
    }
}
pageReload();
const timer = setInterval(pageReload, 20000);
setInterval();
