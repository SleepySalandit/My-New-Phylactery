const randomize = document.querySelector('.randomize');
const phylacteryobject = document.querySelector('.phylacteryobject');
const phylacterylocation = document.querySelector('.phylacterylocation');
const phylacteryweakness = document.querySelector('.phylacteryweakness');
const phylacterydefense = document.querySelector('.phylacterydefense');
const phylacteryfake = document.querySelector('.phylacteryfake');
const fakedefense = document.querySelector('.fakedefense');

const sentence1 = 'Your phylactery is :insertw: :insertx:, with the arcane runes needed for your lichdom written with :insertz:.';
const sentence2 = 'Your phylactery is located in :insertc:.';
const sentence3 = 'Your phylactery can only be destroyed using :insertd:.';
const sentence4 = 'Your phylactery is guarded primarily by :inserte: as its last line of defense.';
const sentence5 = 'You also have a fake phylactery, one taking the form of :insertg:.';
const sentence6 = 'Your fake phylactery is located in a rather standard dungeon, guarded by :inserti:.'

const insertw = ['a beautiful', 'an enormous', 'a weathered', 'a pristine'];

const insertx = ['hourglass with suspended :insertb: sand', 'leather book', ':inserty: pendant', ':inserta: skull', 'copper coin', 'box lined with :insertb: velvet, containing your rotting heart'];

const inserty = ['ruby', 'sapphire', 'emerald', 'topaz', 'rose quartz', 'diamond', 'onyx'];

const insertz = ['silver', 'gold', 'platinum', 'blood', 'crushed :inserta:'];

const inserta = ['ruby', 'sapphire', 'emerald', 'topaz', 'rose quartz', 'diamond', 'onyx'];

const insertb = ['crimson', 'blue', 'regal-purple', 'emerald-green', 'black', 'white'];

const insertc = ['a forgotten city, where only the dead walk', 'an underground labrynth, filled to the brim with undead minions under your command', 'the depths on an immense forest, filled with more horrors than one can count', 'another dimension, one that only you can easily travel to', 'a tomb filled to the brim with deadly traps, all too happy to destroy all who would seek to destroy you'];

const insertd = ['a powerful spell, one that only the strongest of mages can cast', 'a specific magical weapon, which is also hidden', 'power gained from a long-forgotten god', 'a weapon that is enchanted so very few can even lift it', 'an ancient artifact from plane of existance'];

const inserte = ['a hoard of your strongest minions', 'a highly complex puzzle', 'a skeletal dragon that is fiercely loyal to you', 'a powerful demon that you made a deal with', 'a set of immense golems', 'a staggering number of defensive glyphs, ready to spew powerful :insertf: magic at any who disturb the phylactery', 'a devestating trap'];

const insertf = ['fire', 'ice', 'lightning', 'earth', 'wind', 'infernal'];

const insertg = ['a statuette made of :inserth:, one with your likeness', 'a vial shaped like a skull filled with acidic liquid', 'an immaculately crafted clay vase', 'a beautiful golden chalice adorned with gigantic emeralds on its cardinal directions', 'a platinum cube with an immense onyx gem on each of its faces', 'a cup filled with your own blood', 'a rotten organ, supposedly from your own body'];

const inserth = ['ruby', 'sapphire', 'emerald', 'topaz', 'rose quartz', 'diamond', 'onyx'];

const inserti = ['a swarm of demons', 'an immense pit filled with :insertj:', 'glyphs that, when the fake is moved or touched, fire off powerful :insertf: magic', 'a barrier comprised of magic', 'a young dragon under your command'];

const insertj = ['spikes', 'acid', 'venomous snakes or other such creatures', 'lava', 'water', 'oozes', 'golems', 'zombies'];

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
    let newPhylactery4 = sentence4;
    let newPhylactery5 = sentence5;
    let newPhylactery6 = sentence6;

    const itemw = randomValueFromArray(insertw);
    const itemx = randomValueFromArray(insertx);
    const itemy = randomValueFromArray(inserty);
    const itemz = randomValueFromArray(insertz);
    const itema = randomValueFromArray(inserta);
    const itemb = randomValueFromArray(insertb);
    
    const itemc = randomValueFromArray(insertc);

    const itemd = randomValueFromArray(insertd);

    const iteme = randomValueFromArray(inserte);
    const itemf = randomValueFromArray(insertf);

    const itemg = randomValueFromArray(insertg);
    const itemh = randomValueFromArray(inserth);

    const itemi = randomValueFromArray(inserti);
    const itemj = randomValueFromArray(insertj);

    newPhylactery1 =newPhylactery1.replaceAll(':insertw:', itemw);
    newPhylactery1 =newPhylactery1.replaceAll(':insertx:', itemx);
    newPhylactery1 =newPhylactery1.replaceAll(':inserty:', itemy);
    newPhylactery1 =newPhylactery1.replaceAll(':insertz:', itemz);
    newPhylactery1 =newPhylactery1.replaceAll(':inserta:', itema);
    newPhylactery1 =newPhylactery1.replaceAll(':insertb:', itemb);

    newPhylactery2 =newPhylactery2.replaceAll(':insertc:', itemc);

    newPhylactery3 =newPhylactery3.replaceAll(':insertd:', itemd);
    
    newPhylactery4 =newPhylactery4.replaceAll(':inserte:', iteme);
    newPhylactery4 =newPhylactery4.replaceAll(':insertf:', itemf);

    newPhylactery5 =newPhylactery5.replaceAll(':insertg:', itemg);
    newPhylactery5 =newPhylactery5.replaceAll(':inserth:', itemh);

    newPhylactery6 =newPhylactery6.replaceAll(':inserti:', itemi);
    newPhylactery6 =newPhylactery6.replaceAll(':insertj:', itemj);
    newPhylactery6 =newPhylactery6.replaceAll(':insertf:', itemf);

    phylacteryobject.textContent = newPhylactery1;
    phylacteryobject.style.visibility = 'visible';

    phylacterylocation.textContent = newPhylactery2;
    phylacterylocation.style.visibility = 'visible';

    phylacteryweakness.textContent = newPhylactery3;
    phylacteryweakness.style.visibility = 'visible';

    phylacterydefense.textContent = newPhylactery4;
    phylacterydefense.style.visibility = 'visible';

    phylacteryfake.textContent = newPhylactery5;
    phylacteryfake.style.visibility = 'visible';

    fakedefense.textContent = newPhylactery6;
    fakedefense.style.visibility = 'visible';
}
