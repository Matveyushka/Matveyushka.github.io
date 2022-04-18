import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input()
  isOpen: boolean = null!

  @Output()
  isOpenChange = new EventEmitter<boolean>()

  @Input()
  title: string = null!

  @Input()
  message: string = null!

  @Input()
  okAction: () => void = null!

  constructor() { }

  ngOnInit(): void {
    this.checkAttribute(this.isOpen, 'isOpen')
    this.checkAttribute(this.title, 'title')
    this.checkAttribute(this.message, 'message')
    this.checkAttribute(this.okAction, 'okAction')
  }

  close() {
    this.isOpen = false
    this.isOpenChange.emit(this.isOpen)
  }

  runAction() {
    this.okAction()
    this.close()
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation()
  }

  checkAttribute(input: any, attributeName: string): void {
    if (input === null) {
      throw new Error(`Attribute ${attributeName} is required!`)
    }
  }
}
