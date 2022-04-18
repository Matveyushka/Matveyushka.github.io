import { Injectable } from '@angular/core'
import { catchError, Observable, of, tap } from 'rxjs'
import { BlogEntry } from '../../types/BlogEntry'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogEntriesService {
  private resourceUrl = 'api/entries'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<BlogEntry[] | undefined> {
    return this.http
      .get<BlogEntry[]>(this.resourceUrl)
      .pipe(
        catchError(() => of(undefined))
      )
  }

  get(id: number): Observable<BlogEntry | undefined> {
    return this.http
      .get<BlogEntry>(`${this.resourceUrl}/${id}`)
      .pipe(
        catchError(() => of(undefined))
      )
  }

  create(blogEntry: BlogEntry) {
    if (blogEntry.title.length === 0) 
    {
      return of(undefined)
    }
    const createdEntry = new BlogEntry(undefined, blogEntry.title, blogEntry.content)
    return this.http
      .post<BlogEntry>(this.resourceUrl, createdEntry, this.httpOptions)
      .pipe(
        catchError(() => of(undefined))
      )
  }

  update(blogEntry: BlogEntry) {
    if (blogEntry.id === undefined || blogEntry.title.length === 0) 
    {
      return of(undefined)
    }
    return this.http
      .put<BlogEntry>(this.resourceUrl, blogEntry, this.httpOptions)
      .pipe(
        catchError(() => of(undefined))
      )
  }

  delete(id: number) {
    return this.http
      .delete<BlogEntry>(`${this.resourceUrl}/${id}`)
      .pipe(
        catchError(() => of(undefined))
      )
  }
}
