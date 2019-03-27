/** @format */

/**
 *
 * @param {string} key
 * @returns {boolean} - true || false
 */
export const removeLocalStore = (key) => {
  if (typeof Storage !== 'undefined') {
    window.localStorage.removeItem(key);
    return true;
  }
  return false;
};

export default removeLocalStore;
