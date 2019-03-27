/** @format */

/**
 *
 * @param {string} key
 */
function readLocalStore(key) {
  if (typeof Storage !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key));
  }
  return null;
}

export default readLocalStore;
