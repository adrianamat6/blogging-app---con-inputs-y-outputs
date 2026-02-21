import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNew } from './individual-new';

describe('IndividualNew', () => {
  let component: IndividualNew;
  let fixture: ComponentFixture<IndividualNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
