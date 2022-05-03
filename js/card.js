import {getRightEnding} from './util.js';

const apartmentType = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderPopupCard = ({author, offer}) => {
  const cloneCard = cardTemplate.cloneNode(true);

  const title = cloneCard.querySelector('.popup__title');
  if(offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }
  const address = cloneCard.querySelector('.popup__text--address');
  if(offer.address) {
    address.textContent = offer.address;
  } else {
    address.remove();
  }
  const price = cloneCard.querySelector('.popup__text--price');
  if(offer.price) {
    price.textContent = `${offer.price} ${getRightEnding(offer.price, 'рубль', 'рубля', 'рублей')}/сутки`;
  } else {
    price.remove();
  }
  const type = cloneCard.querySelector('.popup__type');
  if(offer.type) {
    type.textContent = apartmentType[offer.type];
  } else {
    type.remove();
  }
  cloneCard.querySelector('.popup__text--capacity').textContent =
  `${offer.rooms} ${getRightEnding(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} ${getRightEnding(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featureContainer = cloneCard.querySelector('.popup__features');

  featureContainer.innerHTML = '';

  if (offer.features.length > 0) {
    offer.features.forEach((someFeature) => {
      const featureList = document.createElement('li');
      featureList.classList.add('popup__feature');
      featureList.classList.add('popup__feature--'.concat(someFeature));
      featureContainer.append(featureList);
    });
  } else {
    featureContainer.remove();
  }
  const description = cloneCard.querySelector('.popup__description');
  if(offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }
  const photoContainer = cloneCard.querySelector('.popup__photos');
  photoContainer.innerHTML = '';

  if (offer.photos.length > 0) {
    offer.photos.forEach((photo) => {
      const somePhoto = document.createElement('img');

      somePhoto.classList.add('popup__photo');
      somePhoto.src = photo;
      somePhoto.height = 40;
      somePhoto.width = 45;

      photoContainer.append(somePhoto);
    });
  }
  cloneCard.querySelector('.popup__avatar').src = author.avatar;

  return cloneCard;
};
export {renderPopupCard};
