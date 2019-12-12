class ItemStorage {
    constructor() {
        this.object = JSON.parse(localStorage.getItem("ITEMS1"));
        if (!this.object) {
            this.object = [];
        }
    }

    addItem(itemName, itemRarity, itemWorthCopper, itemAmount) {
        let newRow = `
            <div class="itemRow">
                <div class="number"></div>
                <div class="itemTitle">${itemName}</div>
                <div class="itemRarity">${itemRarity}</div>
                <div class="itemValue">${itemWorthCopper}</div>
                <div class="itemAmount">${itemAmount}</div>
            </div>`;
        let result = [newRow, itemRarity];
        this.object.push(result);
        this.render();
    }

    render() {
        let itemStore = document.getElementById('itemStorageBox');
        itemStore.innerHTML = '';
        itemStore.innerHTML = `
            <div class="itemTitleRow">
                <div class="numberHeader">Num</div>
                <div class="itemTitle">Title</div>
                <div class="itemRarity">Rarity</div>
                <div class="itemValue">Value</div>
                <div class="itemAmount">Amount</div>
            </div>`;
        this.object.forEach(item => {
            itemStore.innerHTML += item[0];
        });
        let placeHolder = 1;
        itemStore.innerHTML += `<div class="button" onclick="document.getElementById('itemDetails').style.display = 'flex'">Add Item</div>`;
        localStorage.setItem("ITEMS1", JSON.stringify(this.object));
        for (let i = 0; i < this.object.length; i++) {
            document.getElementsByClassName('number')[0].innerHTML = placeHolder + '.';
            placeHolder++;
        }
    }

    delete(id) {
        this.object.splice((id - 1), 1);
        this.render();
    }
}

let itemStorage = new ItemStorage();
itemStorage.render();


document.getElementById('selection').innerHTML = '';
for (let i = 1; i <= 99; i++) {
    document.getElementById('selection').innerHTML += `<option value="${i}">${i}</option>`
}