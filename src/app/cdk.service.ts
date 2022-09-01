import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CdkService {
  registerIds: string[] = [];
  sub = new BehaviorSubject<string[]>(this.registerIds);
  sub$ = this.sub.asObservable();
  constructor() {}

  register(id: string) {
    this.registerIds.push(id);
    this.sub.next(this.registerIds);
  }
}
