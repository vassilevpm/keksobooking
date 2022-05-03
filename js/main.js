import {renderPopupCard} from './card.js';
import {offers} from './data.js';

const map = document.querySelector('#map-canvas');
map.appendChild(renderPopupCard(offers[0]));
