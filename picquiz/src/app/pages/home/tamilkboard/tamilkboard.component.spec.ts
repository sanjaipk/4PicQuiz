import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilkboardComponent } from './tamilkboard.component';

describe('TamilkboardComponent', () => {
  let component: TamilkboardComponent;
  let fixture: ComponentFixture<TamilkboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamilkboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilkboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
