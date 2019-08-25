const supertest = require('supertest');
const server = require('./server');

const db = require('../database/dbConfig.js');

beforeEach(async ( )=> {
    await db('users').truncate()
})
describe('login route', function() {
    it('return 401 on fail attempts with incorrect credentials', function() {
        const hacker = {
            username: 'badUser',
            password: "adfajksdf"}

        return supertest(server).post('/api/login').send(hacker).then(res => {
            expect(res.status).toBe(401);
        })
    });
    it('return 500 if passing invalid data', function() {
        const hacker = {
           

        }


        return supertest(server).post('/api/login').send(hacker).then(res => {
            expect(res.status).toBe(500);
        })
    });
})

describe('register route', function() {
    it('return 201 when called with valid credentials', function() {
        const hacker = {
            username: 'Elaine',
            password: "neighbor"}

        return supertest(server).post('/api/register').send(hacker).then(res => {
            expect(res.status).toBe(201);
        })
    });
    it('return 500 if passing invalid data', function() {
        const hacker = {
           

        }

        return supertest(server).post('/api/register').send(hacker).then(res => {
            expect(res.status).toBe(500);
        })
    });
})

