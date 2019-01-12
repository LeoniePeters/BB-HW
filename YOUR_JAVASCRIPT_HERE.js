// Write your JS here

const hero = {
    name: 'The Bride',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    }
}

function rest(obj){
    obj.health = 10;
    return obj;
}

const dagger ={
    type: 'dagger',
    damage: 2
}

function pickUpItem(obj1,obj2){
    obj1.inventory.push(obj2)
}


function equipWeapon(obj){
    if(obj.inventory[0]){
        obj.weapon = obj.inventory[0]
        const section = document.getElementById('reload');
        section.remove();
        displayStats();
    } 
}


function displayStats(){
    const display = document.getElementById('display');
    const section = document.createElement('section');
    section.id = 'reload'
    display.appendChild(section);
    const paragraph = document.createElement('p');
    section.appendChild(paragraph)
    paragraph.innerText = `Hero's name: ${hero.name}`;
    const paragraph2 = document.createElement('p');
    section.appendChild(paragraph2)
    paragraph2.innerText = `Health: ${hero.health}`;
    const paragraph3 = document.createElement('p');
    section.appendChild(paragraph3)
    paragraph3.innerText =`Weapon: ${hero.weapon.type}`;
    const paragraph4 = document.createElement('p');
    section.appendChild(paragraph4)
    paragraph4.innerText = `Weapon damage: ${hero.weapon.damage}`;
    
}

displayStats();