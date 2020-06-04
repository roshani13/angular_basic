import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['This is initial goal','This is final goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal)
  {
      this.goals.next(goal);
  }
}
