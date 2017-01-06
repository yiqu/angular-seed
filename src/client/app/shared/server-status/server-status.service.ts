import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Rx';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the server statuses service
 */
@Injectable()
export class ServerStatusService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<string[]> {
    /*
    return this.http.get('/heartbeat/whoisup.json')
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
      */
      
      return Math.floor(Math.random() * 2) + 1 === 1 ? this.http.get('/assets/whoisup.json')
      .map((res: Response) => {
        return res.json();
      })
      .delay(1000) // Added delay to test load mask
      .catch(this.handleError) : this.http.get('/assets/whoisup2.json')
      .map((res: Response) => {
        return res.json();
      })
      .delay(1000) // Added delay to test load mask
      .catch(this.handleError);
      
  }

 /**
   * Create a Subject to be subscribed for updating LAST UPDATED comp.
   */
  updateFetchTime: Subject<boolean> = new Subject<boolean>();

 /**
   * Create a Subject to be subscribed for updating operational message in navbar comp.
   */
  updateOperationalStatus: Subject<string> = new Subject<string>();
 
 /**
   * Create a singleton variable to prevent multiple pollings
   */
  startedPolling = false;

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    console.log('Errrror!');
    return Observable.throw(errMsg);
  }
}

