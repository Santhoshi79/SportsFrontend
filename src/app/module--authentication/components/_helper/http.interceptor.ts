import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { EventBusService } from '../_event/event-bus.service';
import { EventData } from '../_event/event.class';
import { StorageService } from '../../services/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private storageService: StorageService, private eventBusService:EventBusService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials:true,
    });
    return next.handle(req).pipe(
      catchError((error)=>{
        if(
          error instanceof HttpErrorResponse && !req.url.includes('auth/signin')&&
          error.status === 401
        ) {
          return this.handle401Error(req,next);
        }

        return throwError(() => error);
      })
    );
  }
  private handle401Error(request: HttpRequest<unknown>, next: HttpHandler) {

    if (!this.isRefreshing){
      this.isRefreshing = true;

      if(this.storageService.isLoggedIn()){
        this.eventBusService.emit(new EventData('logout',null));
      }
    }
   return next.handle(request);
  }
}

export const HttpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass : HttpRequestInterceptor, multi:true},
];
