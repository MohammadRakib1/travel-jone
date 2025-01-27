const allbtn = document.getElementsByClassName('add-btn');

let count = 0;
for (const btn of allbtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;

        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const parseIntPrice = parseInt(price);

        const selectedPlaceContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = parseIntPrice;

        li.appendChild(p);
        li.appendChild(p2);
        selectedPlaceContainer.appendChild(li);

        const totalCost = document.getElementById('total-cost').innerText;
        const parseIntTotalCost = parseInt(totalCost);

        const sum = parseIntPrice + parseIntTotalCost;

        setInnerText('total-cost', sum);


        setInnerText('cart-count', count);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}