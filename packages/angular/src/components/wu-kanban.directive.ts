import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-kanban', standalone: true })
export class WuKanbanDirective implements OnInit, OnDestroy {
  @Output() wuCardMove = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private cardMoveHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.cardMoveHandler = (e: Event) => this.wuCardMove.emit(e as CustomEvent);
    this.el.addEventListener('wu-card-move', this.cardMoveHandler);
  }

  ngOnDestroy() {
    if (this.cardMoveHandler) this.el.removeEventListener('wu-card-move', this.cardMoveHandler);
  }
}

@Directive({ selector: 'wu-kanban-column', standalone: true })
export class WuKanbanColumnDirective {
  @Input() label?: string;
  @Input() columnId?: string;
}
