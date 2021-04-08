import { Component, OnInit } from '@angular/core';
import { LEADERS } from "../shared/leaders"
import { Leader } from "../shared/leaders"
import { LeaderService } from '../service/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders!: Leader[];
  constructor(private leaderservice : LeaderService ) {   }

  ngOnInit(): void {
    this.leaders = this.leaderservice.getLeaders()
  }

}
