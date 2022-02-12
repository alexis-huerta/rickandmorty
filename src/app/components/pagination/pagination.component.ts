import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number;
  @Output() changePageEvent ?= new EventEmitter();
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    this.currentPage = this.currentPage - 1;
    this.changePageEvent.emit(this.currentPage);
  }

  next() {
    this.currentPage = this.currentPage + 1;
    this.changePageEvent.emit(this.currentPage);
  }

}
