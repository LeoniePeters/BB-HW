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
    } 
}

function createElement(txt){
    const paragraph = document.createElement('p');
    const display = document.getElementById('display')
    display.appendChild(paragraph);
    paragraph.innerText = txt;
}

function displayStats(){
    createElement(`Hero's name: ${hero.name}`);
    createElement(`Health: ${hero.health}`);
    createElement(`Weapon: ${hero.weapon.type}`);
    createElement(`Weapon damage: ${hero.weapon.damage}`);
}

displayStats();