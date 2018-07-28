import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class InvoiceService {
    private headers: any;
    private base_url: string = 'http://127.0.0.1:5000/';

    constructor(public _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
    }

    /**
     * Get object without param (All object in)
     */

     getter(url) {
        return this._http
            .get(this.base_url + url, { headers: this.headers })
            .map(
                (response: Response) =>  {
                  return response.json();
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('error');
                }
            );

     }

     /**
      * Save object
      */


      saver(url, data) {
          if (url && data) {
             return this._http.post(this.base_url + url , data, this.headers);

        }
      }

}
