import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAmmDialogComponent } from './custom-amm-dialog.component';

describe('CustomAmmDialogComponent', () => {
  let component: CustomAmmDialogComponent;
  let fixture: ComponentFixture<CustomAmmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAmmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAmmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
