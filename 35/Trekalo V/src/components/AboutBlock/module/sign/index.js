


export const sign = () => {
  const signWrapper = document.createElement('div');
  signWrapper.classList.add('sign')
  const signText = document.createElement('p');

  signText.textContent = `Дата__________   Подпись__________`;
  signWrapper.append(signText);
  return signWrapper;
}
