import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.scss']
})
export class QboardComponent implements OnInit {
  public formdata = new FormGroup({
    c1: new FormControl('', Validators.compose([ Validators.required])),
    c2: new FormControl('', Validators.compose([ Validators.required])),
    c3: new FormControl('', Validators.compose([ Validators.required])),
    c4: new FormControl('', Validators.compose([ Validators.required])),
    c5: new FormControl('', Validators.compose([ Validators.required]))
 });
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    alert(data);
  }
}
