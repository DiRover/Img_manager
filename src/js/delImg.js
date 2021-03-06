/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { url } from './app';

const showFiles = document.querySelector('[data-srv="show-files"]');

// удаляем картинки с сервера
export default async function delImg(e) {
  const { target } = e;
  if (!target.hasAttribute('data-del')) return; // если не попали на крестик выходим
  showFiles.innerHTML = '';
  const parent = target.closest('[data-box="img"]'); // находим контейнер с картинкой и Х
  console.log(parent);
  const img = target.previousSibling; // находим картинку
  const src = img.getAttribute('src'); // получаем значение атрибута src
  console.log(src);
  console.log(`${src}`);
  const response = await fetch(`${src}`, {
    method: 'DELETE',
  });
  const result = await response.text();
  console.log(result);
  showFiles.innerHTML = result;
  parent.remove(); // удаляем контейнер с картинкой и Х
}
