const calculateValue = document.getElementById("calculate").addEventListener('click', function () {
    const food = document.getElementById('food');
    const foodPrice = food.value;
    const rent = document.getElementById('rent');
    const rentPrice = rent.value;
    const clothes = document.getElementById('clothes');
    const clothesPrice = clothes.value;
    const totalexprenses = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);
    document.getElementById('exprenses').innerText = totalexprenses;
    // document.getElementById(remaining).innerText = 
    // console.log(totalexprenses);
    // console.log(foodPrice, rentPrice, clothesPrice);
})
