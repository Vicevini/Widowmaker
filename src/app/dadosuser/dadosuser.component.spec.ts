import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosuserComponent } from './dadosuser.component';

describe('DadosuserComponent', () => {
  let component: DadosuserComponent;
  let fixture: ComponentFixture<DadosuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
