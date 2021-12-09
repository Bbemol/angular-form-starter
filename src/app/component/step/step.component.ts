import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: [
  ]
})
export class StepComponent implements OnInit {
  stepID: number | null
  constructor(
    private route: ActivatedRoute
  ) {
    this.stepID = 0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stepID = parseInt(params.get('id') || '0', 10)
    })
  }

}
