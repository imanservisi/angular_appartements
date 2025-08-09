import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLotComponent } from './index-lot.component';

describe('IndexLotComponent', () => {
  let component: IndexLotComponent;
  let fixture: ComponentFixture<IndexLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexLotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
