// Bank-deposite    

document.getElementById("deposite-button").addEventListener("click", function () {

    //  get the amount deposited
    const depositeInput = document.getElementById("deposite-inpute");
    const newdepositeAmoutText = depositeInput.value;




    // n
    const depsoiteTotal = document.getElementById("deposite-total");

    const prevousAmountText = depsoiteTotal.innerText;

    const updatedDepositeAmount = parseFloat(newdepositeAmoutText) + parseFloat(prevousAmountText);

    depsoiteTotal.innerText = updatedDepositeAmount;

    //geting balnce
    const balance = document.getElementById("balnce");
    depositeInput.value = "";
    const balanceText = balance.innerText;
    const blanceTotal = parseFloat(balanceText) + parseFloat(newdepositeAmoutText);
    balance.innerText = blanceTotal;

    //clear the depsoite handle filed


});


// withDraw

document.getElementById("withdraw-button").addEventListener("click", function () {
    // get the withdraw current amount
    const withdareAmount = document.getElementById("withdraw-input");
    const withdrawValue = withdareAmount.value;
    // withdraw money
    const withdrawInput = document.getElementById("withDraw");
    const withdrawText = withdrawInput.innerText;

    const newAmountOfWithdarw = parseFloat(withdrawValue) + parseFloat(withdrawText);
    withdrawInput.innerText = newAmountOfWithdarw;
    withdareAmount.value = "";


    // total Blace check
    const Balance2 = document.getElementById("Balcne");
    const mainBalance = Balance2.innerText;

    const finalBalcnce = parseFloat(mainBalance) - parseFloat(newAmountOfWithdarw);
    Balance2.innerText = finalBalcnce;

})