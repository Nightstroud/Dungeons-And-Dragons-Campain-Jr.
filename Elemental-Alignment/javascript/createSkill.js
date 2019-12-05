class Skill {
    constructor() {
        this.object = JSON.parse(localStorage.getItem(selectedAlignment.toString()));
        if (!this.object) {
            this.object = [];
        }
        this.renderSkills();
    }

    createSkill(name, lvl, cost) {
        let skill = `
            <div class="rowType1">
                <div class="title">${name}</div>
                <div class="lvl">${lvl}</div>
                <div class="upgradeCost">${cost}</div>
            </div>`;
        this.object.push(skill);
        if (this.lastSkill === 'rowType1') {
            this.lastSkill = 'rowType2';
        }
        else this.lastSkill = 'rowType1';
        this.renderSkills();
    }

    renderSkills() {
        let perkStore = document.getElementById("perkStore");
        perkStore.innerHTML = `
        <div id="headerRow" class="rowType2">
                <div class="title">Title: ${selectedAlignment}</div>
                <div class="lvl">Level</div>
                <div class="upgradeCost">Upgrade Cost</div>
            </div>`;
        this.object.forEach(skill => {
            perkStore.innerHTML += skill;
        });
        let placeHolder = document.getElementById('perkStore').children;
        let x = true;
        for (let i = 0; i < placeHolder.length; i++) {
            if (x === true) {
                placeHolder[i].className = 'rowType2';
                x = false;
            }
            else x = true;
        }
        perkStore.innerHTML += `<div id="footerRow" onclick="document.getElementById('createSkillModal').style.display = 'flex';">Create New Skill</div>`;
        localStorage.setItem(selectedAlignment.toString(), JSON.stringify(this.object));
    }

    deleteSkill(id) {
        this.object.splice((id - 1), 1);
        this.renderSkills();
    }
}