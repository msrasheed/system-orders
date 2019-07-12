import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestfulConfigService {

  public apiURLQuery: string;
  constructor() { }
}
