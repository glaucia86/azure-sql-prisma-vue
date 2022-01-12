/**
 * file: assets/icons.js
 * date: 01/03/2022
 * description: file responsible for handling the logic of the icons in the application
 * author: Glaucia Lemos - Twitter <@glaucia_lemos86>
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faUserEdit, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);
