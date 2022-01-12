/**
 * file: src/services/Api.js
 * data: 01/03/2022
 * description: file responsible for initializing 'axios' and
 * HTTP base url requests
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import axios from 'axios';

export default () => axios.create({
  //= => Back-End 'baseURL'-> will make communication btw Front-End with Back-End
  baseURL: 'http://localhost:3001/api/v1',
});
