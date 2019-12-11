let itemTitle = document.getElementById('itemTitle').value;
let itemRarity = document.getElementById('itemRarity').value;
let itemValue = getValue();
let itemAmount = document.getElementById('selection').value;
function SetValues() {
    itemTitle = document.getElementById('itemTitle').value;
    itemRarity = document.getElementById('itemRarity').value;
    itemValue = getValue();
    itemAmount = document.getElementById('selection').value;
}


function getValue () {
    let result = "";
    result += 'CP: ' + document.getElementById('CP').value;
    result += ' SP: ' + document.getElementById('SP').value;
    result += ' GP: ' + document.getElementById('GP').value;
    result += ' PP: ' + document.getElementById('PP').value;
    result += ' GC: ' + document.getElementById('GC').value;
    return result;
}