import { BaseResponseOptions, Request, Response, XHRBackend, XHRConnection } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

export class InterceptorXHRBackend extends XHRBackend 
{
    createConnection(request:Request):XHRConnection
    {
        let connection:XHRConnection=super.createConnection(request);
        connection.response=connection.response.do(this.processResponse);
        return connection;
    }

    processResponse(res:Response)
    {
        let Authorization=res.headers.get("Authorization");
        if(Authorization){
            let token=Authorization.split(" ");
            localStorage.setItem('id_token',token[1]);

        }
        return Observable.of(res);
    }

}