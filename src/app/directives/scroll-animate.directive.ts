import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '.animate-slide-in-left, .animate-slide-in-right, .animate-fade-up'
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private animationClasses: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const classes = this.el.nativeElement.className.split(' ');
    this.animationClasses = classes.filter((c: string) => 
      ['animate-slide-in-left', 'animate-slide-in-right', 'animate-fade-up'].includes(c)
    );

    // Initially hide and remove animation class
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.animationClasses.forEach(c => this.renderer.removeClass(this.el.nativeElement, c));

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When in view, remove inline opacity=0 and add animation class
          this.renderer.removeStyle(this.el.nativeElement, 'opacity');
          this.animationClasses.forEach(c => this.renderer.addClass(this.el.nativeElement, c));
        } else {
          // When out of view, set opacity=0 and remove animation class
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
          this.animationClasses.forEach(c => this.renderer.removeClass(this.el.nativeElement, c));
        }
      });
    }, { threshold: 0.05 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
