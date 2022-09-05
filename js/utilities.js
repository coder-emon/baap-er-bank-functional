function getInputField(inputFieldId){
    const inputField =document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = "";
    return inputValue;
}
function getElement(elementId){
    const element =document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
function setElement(elementId, newElementValue){
    const element =document.getElementById(elementId);
    element.innerText = newElementValue;
}