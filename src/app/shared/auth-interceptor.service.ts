import { Injectable, Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpstorageService } from './httpstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInteceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req:any, next:any){
    let HttpService = this.injector.get(HttpstorageService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${HttpService.GetToken()}` 
      }
    })
    return next.handle(tokenizedReq)
  }
}
