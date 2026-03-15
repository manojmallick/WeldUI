import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-video', standalone: true })
export class WuVideoDirective implements OnInit, OnDestroy {
  @Input() src?: string;
  @Input() poster?: string;
  @Input() autoplay?: boolean;
  @Input() loop?: boolean;
  @Input() muted?: boolean;
  @Input() controls?: boolean;

  @Output() wuPlay = new EventEmitter<CustomEvent>();
  @Output() wuPause = new EventEmitter<CustomEvent>();
  @Output() wuEnded = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private playHandler?: (e: Event) => void;
  private pauseHandler?: (e: Event) => void;
  private endedHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.playHandler = (e: Event) => this.wuPlay.emit(e as CustomEvent);
    this.pauseHandler = (e: Event) => this.wuPause.emit(e as CustomEvent);
    this.endedHandler = (e: Event) => this.wuEnded.emit(e as CustomEvent);
    this.el.addEventListener('wu-play', this.playHandler);
    this.el.addEventListener('wu-pause', this.pauseHandler);
    this.el.addEventListener('wu-ended', this.endedHandler);
  }

  ngOnDestroy() {
    if (this.playHandler) this.el.removeEventListener('wu-play', this.playHandler);
    if (this.pauseHandler) this.el.removeEventListener('wu-pause', this.pauseHandler);
    if (this.endedHandler) this.el.removeEventListener('wu-ended', this.endedHandler);
  }
}
