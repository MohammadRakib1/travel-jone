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

        const budget = document.getElementById('budget').innerText;
        const parseIntBudget = parseInt(budget);

        if (parseIntBudget - parseIntPrice < 0) {
            alert('Sorry your balace is low');
            return;
        }

        document.getElementById('budget').innerText = parseIntBudget - parseIntPrice;

        selectedPlaceContainer.appendChild(li);

        totalCost('total-cost', parseIntPrice);
        grandTotalCost('grand-total', parseIntPrice);
        setInnerText('cart-count', count);
    });
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const parseIntTotalCost = parseInt(totalCost);
    const sum = value + parseIntTotalCost;
    setInnerText(id, sum);
}

function grandTotalCost(category) {

    const totalCost = document.getElementById('total-cost').innerText;
    const parseIntTotalCost = parseInt(totalCost);

    if (category == 'bus') {
        setInnerText('grand-total', parseIntTotalCost + 100);
    }
    else if (category == 'train') {
        setInnerText('grand-total', parseIntTotalCost - 200);
    }
    else if (category == 'flight') {
        setInnerText('grand-total', parseIntTotalCost + 500);
    }
    else {
        setInnerText('grand-total', parseIntTotalCost);
    }
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}