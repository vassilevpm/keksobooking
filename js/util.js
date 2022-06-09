const ALERT_SHOW_TIME = 2000;

const ERRORMESSAGE = 'Данные с сервера не загрузились. Попробуйте обновить страницу.';

const isEscapeKey = (evt) => evt.key === 'Escape';

const onError = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = ERRORMESSAGE;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getRightEnding = (number, one, two, many) =>
{ let rightEnding = '';
  number = number % 100;
  if (number >= 11 && number <= 19) {
    rightEnding = many;
  } else {
    const i = number % 10;
    switch (i)
    {
      case (1): rightEnding = one; break;
      case (2):
      case (3):
      case (4): rightEnding = two; break;
      default: rightEnding =many;
    }
  }
  return rightEnding;
};

export {isEscapeKey, onError, debounce, getRightEnding};
