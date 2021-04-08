import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders() : Leader[]{
    return LEADERS
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
  constructor() { }
}
