import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcdialogComponent } from './nfcdialog.component';

describe('NfcdialogComponent', () => {
  let component: NfcdialogComponent;
  let fixture: ComponentFixture<NfcdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfcdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfcdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
