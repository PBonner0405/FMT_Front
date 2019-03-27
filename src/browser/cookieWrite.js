/** @format */

/**
 *
 * @param {string} key
 * @param {object} value
 * @param {number} expdays
 */
const writeCookie = (key, value, expdays = 10) => {
  const d = new Date();
  d.setTime(d.getTime() + expdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${key}=${value};${expires};path=/`;
};

export default writeCookie;
