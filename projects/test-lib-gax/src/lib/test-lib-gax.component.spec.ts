import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibGaxComponent } from './test-lib-gax.component';

describe('TestLibGaxComponent', () => {
  let component: TestLibGaxComponent;
  let fixture: ComponentFixture<TestLibGaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLibGaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestLibGaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
