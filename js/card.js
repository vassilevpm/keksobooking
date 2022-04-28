const PLACE_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderFeatures = (templateElement, elements) => {
  const featureList = templateElement.querySelectorAll('.popup__feature');
  if (elements.offer.features === undefined) {
    templateElement.querySelector('.popup__features').classList.add('hidden');
  } else {
    featureList.forEach((featureItem) => {
      const isNecessary = elements.offer.features.some((features) => featureItem.classList.contains(`popup__feature--${features}`),
      );
      if (!isNecessary) {
        featureItem.classList.add('hidden');
      }
    });
  }
};

const renderPhotos = (templateElement, elements) => {
  const photoContainer = templateElement.querySelector('.popup__photos');
  const photoItems = elements.offer.photos;
  if (photoItems === undefined) {
    photoContainer.classList.add('hidden');
  } else {
    photoContainer.innerHTML = '';
    const newPhotosElements = photoItems.map((element) => `<img src='${element}' class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    const combinePhotosElements = newPhotosElements.join('');
    photoContainer.insertAdjacentHTML('beforeend', combinePhotosElements);
  }
};

const checkAvialableData = (element, data) => {
  if (data === undefined) {
    element.classList.add('hidden');
  }
};

const renderCard = (element) => {
  const templateElement = cardTemplate.cloneNode(true);
  templateElement.querySelector('.popup__title').textContent = element.offer.title;
  templateElement.querySelector('.popup__text--address').textContent = element.offer.address;
  templateElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
  templateElement.querySelector('.popup__type').textContent = PLACE_TYPES[element.offer.type];
  templateElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
  templateElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
  renderFeatures(templateElement, element);
  templateElement.querySelector('.popup__description').textContent = element.offer.description;
  renderPhotos(templateElement, element);
  templateElement.querySelector('.popup__avatar').src = element.author.avatar;
  checkAvialableData(templateElement.querySelector('.popup__description'), element.offer.description);
  checkAvialableData(templateElement.querySelector('.popup__avatar'), element.author.avatar);
  return templateElement;
};

export {renderCard};
