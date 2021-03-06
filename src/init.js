import credentials from "./credentials.js";

/**
 * @typedef {Object} credentials
 * @property {String} apiKey
 * @property {String} userId
 * @property {String} projectId
 * @property {String} projectName
 */

/**
 * @param {credentials} credentials
 * @example
 * init({ "your_apiKey",
 *        "your_userId",
 *        "your_projectId",
 *        "your_projectName"
 *      });
 */
const init = ({ apiKey, userId, projectId, projectName }) => {
  credentials.setCredential = { apiKey, userId, projectId, projectName };
};

export default init;
  