import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisItemComponent } from './devis-item.component';

describe('DevisItemComponent', () => {
  let component: DevisItemComponent;
  let fixture: ComponentFixture<DevisItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
