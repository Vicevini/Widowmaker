import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumouserComponent } from './resumouser.component';

describe('ResumouserComponent', () => {
  let component: ResumouserComponent;
  let fixture: ComponentFixture<ResumouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
