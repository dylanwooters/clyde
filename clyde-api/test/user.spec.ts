'use strict';

import {describe, before, after, it} from 'mocha';
import * as chai from 'chai';
import * as request from 'request';
import { ApiServer } from '../src/api-server';
import {Server, HttpMethod} from 'typescript-rest';

const expect = chai.expect;

const apiServer: ApiServer = new ApiServer();
const userRequest: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>
                 = request.defaults({baseUrl: `http://localhost:${apiServer.PORT}`});

describe('User Controller Tests', () => {

    before(() => {
        return apiServer.start();
    });

    after(() => {
        return apiServer.stop();
    });

    describe('The Rest Server', () => {
        it('should provide a catalog containing the exposed paths', () => {
            expect(Server.getPaths()).to.include.members([
                '/user/:userId'
            ]);
            expect(Server.getHttpMethods('/user/:userId')).to.have.members([HttpMethod.GET]);
        });
    });

    describe('/user/:name', () => {
        it('should return a User object for GET requests', (done) => {
            userRequest('/user/1', (error: any, response, body) => {
                expect(response.statusCode).to.eq(200);
                expect(body).to.eq('{"Company":{"Address":{"City":"Berkeley","State":"California"},"Name":"Temptations"},"Id":1,"Email":"clyde@fatcat.com","Password":"shhDontte11"}');
                done();
            });
        });
    });
});
