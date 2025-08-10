import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLotComponent } from './update-lot.component';

describe('UpdateLotComponent', () => {
  let component: UpdateLotComponent;
  let fixture: ComponentFixture<UpdateLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
