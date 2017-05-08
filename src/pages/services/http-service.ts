import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

/**
 * @desc service for handling http requests
 * supports get method as of now
 * returns a observable which emits success, failure and the completed events
 * Error is handled in the error handler which is an obserbvable and emits an error event
 * 
 */
export class HttpService {

    constructor(private http : Http) {

    }

    httpgetRequest(requestUrl : string) : Observable<any> {
       return this.http.get(requestUrl)
       .map((res : Response) => res.json())
       .catch(this.requestErrorHandler);
    }

    private requestErrorHandler(error : any) {
        if(error instanceof Response){
            return Observable.throw(error)
        }
        return Observable.throw(error);
    }
}
