const calculateValue = document.getElementById("calculate").addEventListener('click', function () {
    const foodPrice = document.getElementById('food').value;
    const rentPrice = document.getElementById('rent').value;
    const clothesPrice = document.getElementById('clothes').value;
    const totalexprenses = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);
    document.getElementById('exprenses').innerText = totalexprenses;

    if (foodPrice.value == "" ||
        foodPrice.value < 0 ||
        rentPrice.value == "" ||
        rentPrice.value < 0 ||
        clothesPrice.value == "" ||
        clothesPrice.value < 0
    ) {
        console.log("please trying to vaild Input");
        return;
    }



    const income = document.getElementById('income');
    const totalIncome = parseFloat(income.value);

    const remaining = totalIncome - totalexprenses;
    document.getElementById('remaining').innerText = remaining;

    document.getElementById('save-btn').addEventListener('click', function () {
        const save = document.getElementById('save').value;
        const discount = parseFloat(totalIncome) * save / 100;
        const totaldiscount = document.getElementById('total-saving').innerText = discount;
        // console.log(totaldiscount)
        const remainingBalance = parseFloat(remaining) - parseFloat(totaldiscount);
        document.getElementById('total-remaining').innerText = remainingBalance;
    })

})
