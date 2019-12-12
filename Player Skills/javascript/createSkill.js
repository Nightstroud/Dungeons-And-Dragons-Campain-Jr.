let selectedClass = "Player Skills";
class Skill {
    constructor() {
        this.object = JSON.parse(localStorage.getItem('THISKEY'));
        if (!this.object) {
            this.object = [];
        }
        this.renderSkills();
    }

    createSkill(name, lvl, cost, skillstring) {
        let skill = `
            <div class="rowType1" onclick="document.getElementById('skillsDetails').innerHTML = '${skillstring}'; document.getElementById('skillDetailsModal').style.display = 'flex';">
                <div class="number"></div>
                <div class="title">${name}</div>
                <div class="lvl">${lvl}.</div>
                <div class="upgradeCost">${cost} Points</div>
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
                <div class="number">num</div>
                <div class="title">Title: ${selectedClass}</div>
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

        for (let i = 1; i < placeHolder.length; i++) {
            placeHolder[i].children[0].innerHTML = i.toString() + ".";
        }
        perkStore.innerHTML += `<div id="footerRow" onclick="document.getElementById('createSkillModal').style.display = 'flex';">Create New Skill</div>`;
        localStorage.setItem('THISKEY', JSON.stringify(this.object));
    }

    changeSkill(skillId, location) {
        let firstSkill = this.object[(skillId - 1)];
        let secondSkill = this.object[(location - 1)];
        this.object[location - 1] = firstSkill;
        this.object.splice(skillId - 1, 1, secondSkill);
        this.renderSkills();
    }

    deleteSkill(id) {
        this.object.splice((id - 1), 1);
        this.renderSkills();
    }
}

let skillStore = new Skill();
skillStore.renderSkills();