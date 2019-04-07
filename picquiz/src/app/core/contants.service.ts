import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ContantsService {
    private static readonly API_BASE = environment.apibase;
    private static readonly API_Prefix = 'https://';
    static API = class {
        public static readonly getIds = ContantsService.API_Prefix + ContantsService.getAPIEndPoint('getIds');
        public static readonly getQ = ContantsService.API_Prefix + ContantsService.getAPIEndPoint('getQ');
    };

    static getAPIEndPoint(apiName): string {
        switch (apiName) {
            case 'getIds':
                return environment.serverType === 'aws' ? 'k507yvzf3h' + ContantsService.API_BASE : ContantsService.API_BASE + 'getIds';
            case 'getQ':
                return environment.serverType === 'aws' ? 'keoa9oi9a0' + ContantsService.API_BASE : ContantsService.API_BASE + 'getIds';
        }
    }
}