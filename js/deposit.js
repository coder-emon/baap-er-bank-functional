document.getElementById("deposit").addEventListener("click", function(){
    const depositAmount = getInputField("deposit-input");
    if (isNaN(depositAmount)) {
        alert("Please enter a valid number")
        return ;
    }
    const previousDepositTotal = getElement("deposittotal")
    let depositTotal = previousDepositTotal + depositAmount;
    depositTotal = depositTotal.toFixed(2);
    depositTotal = parseFloat(depositTotal);
    setElement("deposittotal", depositTotal);
    const previousBalanceTotal = getElement("balancetotal")
    let balanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal = balanceTotal.toFixed(2);
    balanceTotal = parseFloat(balanceTotal);
    setElement("balancetotal", balanceTotal);
} )