const calculateValue = document.getElementById("calculate").addEventListener('click', function (e) {
    e.preventDefault()


    const foodPrice = document.getElementById('food').value;

    const rentPrice = document.getElementById('rent').value;

    const clothesPrice = document.getElementById('clothes').value;

    let totalexprenses = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);
    document.getElementById('exprenses').innerText = totalexprenses;
    const income = document.getElementById('income');
    const totalIncome = parseFloat(income.value);

    const remaining = totalIncome - totalexprenses;
    document.getElementById('remaining').innerText = remaining;


    if ((isNaN(parseFloat(foodPrice)) || parseFloat(foodPrice) < 0) ||
        (isNaN(parseFloat(rentPrice)) || parseFloat(rentPrice) < 0) ||
        (isNaN(parseFloat(clothesPrice)) || parseFloat(clothesPrice) < 0)) {
        return alert('Please try to valid input');
    }
    else if (totalIncome < totalexprenses) {
        return alert("please try to valid input");
    }


    document.getElementById('save-btn').addEventListener('click', function () {

        let save = document.getElementById('save').value;
        const discount = parseFloat(totalIncome) * save / 100;
        const totaldiscount = document.getElementById('total-saving').innerText = discount;
        // console.log(totaldiscount)
        const remainingBalance = parseFloat(remaining) - parseFloat(totaldiscount);
        document.getElementById('total-remaining').innerText = remainingBalance;
        if (save < remaining) {
            return alert("Not Enough money");
        }

    })

})
