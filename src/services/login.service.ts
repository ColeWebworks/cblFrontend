import{Injectable} from '@angular/core';
import{
    Http,
    Headers,
    RequestOptions
} from '@angular/http';

@Injectable()
export class AuthService {
    static BASE_URL = 'http://api.gamechangerhub.co.uk/api/';
    constructor (private http: Http){}
    
}