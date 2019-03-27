/** @format */

/**
 *
 * @param {string} key
 * @param {object} value
 * @returns {boolean} - true || false.
 */
const writeLocalStore = (key, value) => {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  return false;
};

export default writeLocalStore;
