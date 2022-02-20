/**
 * file: lib/prisma.js
 * data: 02/20/2022
 * description: file responsible for using the 'Prisma Client' in whole application
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
