document.getElementById("withdraw").addEventListener("click", function () {
    const withdrawAmount = getInputField("withdraw-input");
    if (isNaN(withdrawAmount)) {
        alert("Please enter a valid number")
        return;
    }
    const previousBalanceTotal = getElement("balancetotal")
    if (withdrawAmount > previousBalanceTotal) {
        alert("Baap er bank a eto taka nai");
        return;
    }
    const previousWithdrawTotal = getElement("withdrawtotal")
    let withdrawTotal = previousWithdrawTotal + withdrawAmount;
    withdrawTotal = withdrawTotal.toFixed(2);
    withdrawTotal = parseFloat(withdrawTotal);
    setElement("withdrawtotal", withdrawTotal);
    let balanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal = balanceTotal.toFixed(2);
    balanceTotal = parseFloat(balanceTotal);
    setElement("balancetotal", balanceTotal);
})