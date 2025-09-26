import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTiComponent } from './services-ti.component';

describe('ServicesTiComponent', () => {
  let component: ServicesTiComponent;
  let fixture: ComponentFixture<ServicesTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesTiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
