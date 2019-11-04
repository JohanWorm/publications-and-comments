import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListPublicationsComponent } from './list-publications.component';

describe('ListPublicationsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ListPublicationsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ListPublicationsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'publications-and-comments'`, () => {
    const fixture = TestBed.createComponent(ListPublicationsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('publications-and-comments');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ListPublicationsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to publications-and-comments!');
  });
});
