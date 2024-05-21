const randomize = document.querySelector('.randomize');
const phylacteryobject = document.querySelector('.phylacteryobject');
const phylacterylocation = document.querySelector('.phylacterylocation');
const phylacteryweakness = document.querySelector('.phylacteryweakness');

const sentence1 = 'Your phylactery is :insertw: :insertx:, with the arcane runes needed for your lichdom written with :insertz:.';
const sentence2 = 'Your phylactery is located in :insertc:.';
const sentence3 = 'Your phylactery can only be destroyed using :insertd:.';

const insertw = ['a beautiful', 'an enormous', 'a weathered', 'a pristine'];

const insertx = ['hourglass with suspended :insertb: sand', 'leather book', ':inserty: pendant', ':inserta: skull', 'copper coin', 'your heart placed in a box lined with :insertb: velvet'];

const inserty = ['ruby', 'sapphire', 'emerald', 'topaz', 'rose quartz', 'diamond', 'onyx'];

const insertz = ['silver', 'gold', 'platinum', 'blood', 'crushed :inserta:'];

const inserta = ['ruby', 'sapphire', 'emerald', 'topaz', 'rose quartz', 'diamond', 'onyx'];

const insertb = ['crimson', 'blue', 'regular', 'regal-purple', 'emerald-green', 'black', 'white'];

const insertc = ['a forgotten city, where only the dead walk', 'an underground labrynth, filled to the brim with undead minions under your command', 'the depths on an immense forest, filled with more horrors than one can count', 'another dimension, one that only you can easily travel to', 'the hoard of a dragon fiercely loyal to you', 'a tomb filled to the brim with deadly traps, all too happy to destroy all who would seek to destroy you'];

const insertd = ['a powerful spell, one that only the strongest of mages can cast', 'a specific magical weapon, which is also hidden', 'power gained from a long-forgotten god'];

randomize.addEventListener('click', generate);

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

function generate()
{
    let newPhylactery1 = sentence1;
    let newPhylactery2 = sentence2;
    let newPhylactery3 = sentence3;

    const itemw = randomValueFromArray(insertw);
    const itemx = randomValueFromArray(insertx);
    const itemy = randomValueFromArray(inserty);
    const itemz = randomValueFromArray(insertz);
    const itema = randomValueFromArray(inserta);
    const itemb = randomValueFromArray(insertb);
    
    const itemc = randomValueFromArray(insertc);

    const itemd = randomValueFromArray(insertd);

    newPhylactery1 =newPhylactery1.replaceAll(':insertw:', itemw);
    newPhylactery1 =newPhylactery1.replaceAll(':insertx:', itemx);
    newPhylactery1 =newPhylactery1.replaceAll(':inserty:', itemy);
    newPhylactery1 =newPhylactery1.replaceAll(':insertz:', itemz);
    newPhylactery1 =newPhylactery1.replaceAll(':inserta:', itema);
    newPhylactery1 =newPhylactery1.replaceAll(':insertb:', itemb);

    newPhylactery2 =newPhylactery2.replaceAll(':insertc:', itemc);

    newPhylactery3 =newPhylactery3.replaceAll(':insertd:', itemd);

    phylacteryobject.textContent = newPhylactery1;
    phylacteryobject.style.visibility = 'visible';

    phylacterylocation.textContent = newPhylactery2;
    phylacterylocation.style.visibility = 'visible';

    phylacteryweakness.textContent = newPhylactery3;
    phylacteryweakness.style.visibility = 'visible';
}
