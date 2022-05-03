import {getRandomInt, getRandomFloat, shuffleArray} from './util.js';

const TITLES = [
  'Квартира',
  'Загородный дом',
  'Отель',
  'Апартаменты',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bunlalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DISCRIPTIONS = [
  'чисто',
  'уютно',
  'отличный вид из окна',
  'всё в пешей доступности',
  'комфортно',
  'рядом отличное кафе',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const CARDQUANTITY = 10;

const addOffer = () => ({
  author: {
    avatar: `img/avatars/user${getRandomInt(0, 10)}.png`,
  },
  offer: {
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    address: `${getRandomFloat(0, 90, 5)}, ${getRandomFloat(0, 180, 5)}`,
    price: `${getRandomInt(100, 10000)}`,
    type: TYPES[getRandomInt(0, TYPES.length - 1)],
    rooms: `${getRandomInt(1, 10)}`,
    guests: `${getRandomInt(1, 20)}`,
    checkin: CHECKINS[getRandomInt(0, CHECKINS.length - 1)],
    checkout: CHECKOUTS[getRandomInt(0, CHECKOUTS.length - 1)],
    features: shuffleArray(FEATURES).slice(0, getRandomInt(0, FEATURES.length)),
    discription: DISCRIPTIONS[getRandomInt(0, DISCRIPTIONS.length - 1)],
    photos: shuffleArray(PHOTOS).slice(0, getRandomInt(0, PHOTOS.length)),
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
});

const offers = Array.from({length: CARDQUANTITY}, addOffer);

export {offers};
