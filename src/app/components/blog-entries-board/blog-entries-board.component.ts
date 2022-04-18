import { Component, OnInit } from '@angular/core'
import { BlogEntry } from 'src/app/types/BlogEntry'
import { BlogEntriesService } from 'src/app/services/blog-entries/blog-entries.service'

@Component({
  selector: 'app-blog-entries-board',
  templateUrl: './blog-entries-board.component.html',
  styleUrls: ['./blog-entries-board.component.css']
})
export class BlogEntriesBoardComponent implements OnInit {
  isLoading: boolean

  blogEntries: BlogEntry[] = []

  constructor(private blogEntriesService: BlogEntriesService) {
    this.isLoading = true
  }

  ngOnInit(): void {
    this.isLoading = true
    this.blogEntriesService.getAll().subscribe(
      entries => {
        this.blogEntries = entries ?? []
        this.isLoading = false
      }
    )
  }
}
