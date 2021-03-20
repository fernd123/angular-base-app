import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, forkJoin, of, isObservable } from 'rxjs';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { Injector } from '@angular/core';
import { Resource } from 'app/shared/models/resource.model';
declare function stringToInt(initials: string): any;

export function RestService(options: { serviceURL: string, resource: string }) {
  /*return function (constructor: Function) {
    constructor.prototype.serviceURL = options.serviceURL;
    constructor.prototype.resource = options.resource;
    constructor.prototype.urlEndPoint = BASEURL_PROXY + options.serviceURL + "/" + options.resource;
  }*/
}

export abstract class BaseService<I, R extends Resource>{

  public urlEndPoint: string;
  public resource: string;
  protected serviceURL: string;
  // protected client = createClient(this.urlEndPoint);
  protected http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getData(url: string) {
    let params = new HttpParams({ fromString: `size=${500}` });
    return this.http.get(url, { params: params }).pipe(
      catchError(err => of(err.status)));
  }
}
