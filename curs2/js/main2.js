import {Carte} from '../../curs1/carte.js';

// import {Carte} from '../js/Carte.js';
 import {Carte as Mybook} from '../modules/carte.js';



let carte = new Carte('Poezii','Mihai Eminescu', 'Polirom',2007, 25);
carte.deschidCartea();
let mycarte = new Mybook('Poezii','Mihai Eminescu', 'Polirom',2007, 25);
mycarte.deschidCartea();