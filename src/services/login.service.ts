import{Injectable} from '@angular/core';
import{
    Http,
    Headers,
    RequestOptions
} from '@angular/http';

@Injectable()
export class AuthService {
    static BASE_URL = process.env.BASE_URL;
    constructor (private http: Http){}
}