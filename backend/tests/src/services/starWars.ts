import 'mocha';
import { expect } from 'chai';
import { SinonStub, stub } from 'sinon';
import axios from 'axios';

describe('StarWarsService', ()=>{
    let axiosStub:  SinonStub;

    beforeEach(() => {
        axiosStub = (axios, 'get');
    })

    afterEach(() => {
        
    })

    it(('should return grogu information')=>{

    })
})