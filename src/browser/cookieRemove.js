/** @format */

/**
 *
 * @param {string} key
 */
const removeCookie = (key) => {
  document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export default removeCookie;
