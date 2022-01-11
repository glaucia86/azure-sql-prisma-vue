/**
 * file: src/database/prisma-client.config.js
 * description:
 * date: 01/11/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
