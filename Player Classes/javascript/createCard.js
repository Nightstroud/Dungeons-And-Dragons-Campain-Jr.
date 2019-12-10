let selectedClass = null;
let skillStore;
class Card {
    constructor() {
        this.cards = JSON.parse(localStorage.getItem("CLASSCARDS"));
        if (!this.cards) {
            this.cards = [];
        }
    }

    createCard(name, url) {
        let card = `
        <div class="card" onclick="setSelection('${name}');">
                <img src="../resources/${url}.png">
                <p>${name}</p>
            </div>`;
        this.cards.push(card);
        this.displayCards();
    }

    displayCards() {
        document.getElementById("cardContainer").innerHTML = "";
        this.cards.forEach(card => {
            document.getElementById("cardContainer").innerHTML += card;
        });
        localStorage.setItem('CLASSCARDS', JSON.stringify(this.cards));
    }

    deleteCard(index) {
            this.cards.splice(index, 1);
            this.displayCards();
            return "Operation Completed, Reload the page to see your changes.";
    }
}
let ClassCards = new Card();


function GetCardDetails() {
        document.getElementById("modalContainer").style.display = "flex";
}

function setSelection(selection) {
    selectedClass = selection;
    document.getElementById("container").style.display = 'none';
    document.getElementById('perkStore').style.display = 'flex';
    skillStore = new Skill();
}

ClassCards.displayCards();