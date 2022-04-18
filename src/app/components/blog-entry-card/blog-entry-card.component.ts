import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Component, OnInit } from '@angular/core'
import { BlogEntry } from 'src/app/types/BlogEntry'

import { BlogEntriesService } from 'src/app/services/blog-entries/blog-entries.service'
import { Observable } from 'rxjs'

type saveButtonAction = (blogEntry: BlogEntry) => Observable<BlogEntry | undefined>

enum CardMode {
  CREATE,
  EDIT
}

@Component({
  selector: 'app-blog-entry-card',
  templateUrl: './blog-entry-card.component.html',
  styleUrls: ['./blog-entry-card.component.css']
})
export class BlogEntryCardComponent implements OnInit {
  cardMode: CardMode = CardMode.EDIT

  isLoading: boolean = false

  deleteAlert: boolean = false

  blogEntry: BlogEntry = new BlogEntry(undefined, "", "")

  cardModeMap: Map<string, CardMode> = new Map<string, CardMode>([
    ["new", CardMode.CREATE],
    ["card", CardMode.EDIT],
  ])

  submitActions: Map<CardMode, saveButtonAction>

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogEntriesService: BlogEntriesService
  ) {
    this.submitActions = new Map<CardMode, saveButtonAction>([
      [CardMode.CREATE, blogEntriesService.create.bind(blogEntriesService)],
      [CardMode.EDIT, blogEntriesService.update.bind(blogEntriesService)]
    ])
  }

  ngOnInit(): void {
    this.route
      .url
      .subscribe(routeParts => {
        this.cardMode = this.cardModeMap
          .get(routeParts[0].path) ?? CardMode.EDIT

        if (this.cardMode === CardMode.EDIT) {
          this.loadEntry()
        }
      })
  }

  loadEntry(): void {
    this.isLoading = true
    const blogId = Number(this.route.snapshot.paramMap.get('id'))
    this.blogEntriesService
      .get(blogId)
      .subscribe(entry => {
        if (entry !== undefined) {
          this.blogEntry = entry
        }
        
        this.isLoading = false
      })
  }

  goBack(): void {
    this.location.back()
  }

  deleteEntry(): void {
    if (this.blogEntry.id) {
      this.isLoading = true

      this.blogEntriesService
        .delete(this.blogEntry.id)
        .subscribe(_ => this.goBack())
    }
  }

  submit(): void {
    if (this.blogEntry.title.length > 0) {
      this.isLoading = true

      const action = this.submitActions
        .get(this.cardMode)

      if (action !== undefined) {
        action(this.blogEntry)
          .subscribe(_ => this.goBack())
      }
    }
  }

  isEditing(): boolean {
    return this.cardMode === CardMode.EDIT
  }
}
