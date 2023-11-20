import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnChanges {

  @Input() datavalue!:boolean
  public studentname:string='';

  constructor(public activaterouter:ActivatedRoute){
    console.log("activatedrouter",activaterouter)
    activaterouter.params.subscribe((param:any)=>{
      console.log(param);
      this.studentname=param.studentname;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
      
  }
}
