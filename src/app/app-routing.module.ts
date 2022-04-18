import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BlogEntriesBoardComponent } from './components/blog-entries-board/blog-entries-board.component'
import { BlogEntryCardComponent } from './components/blog-entry-card/blog-entry-card.component'

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'board', component: BlogEntriesBoardComponent },
  { path: 'card/:id', component: BlogEntryCardComponent },
  { path: '**', redirectTo: '/board' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
