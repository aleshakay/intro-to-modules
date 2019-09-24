
const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;

};

const makeStore = () =>{
    const domString = 'hi new store'
    printToDom('store-container',domString);
}

//export default and then whatever you want to export can use comma and have additional functions exported from the page

export default {makeStore};