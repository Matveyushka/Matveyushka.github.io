import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { BlogEntry } from '../../types/BlogEntry'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const entries: BlogEntry[] = [
      new BlogEntry(1, "Запись в блоге", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum velit dui, at tincidunt quam elementum nec. Aenean mauris ante, tempus sed pharetra quis, pretium ac nisi. Aliquam egestas sem hendrerit elementum luctus. Pellentesque sed ligula accumsan, lacinia enim sit amet, finibus urna. Donec luctus nulla in nunc dapibus mattis. Vestibulum cursus iaculis est, ut sagittis felis pretium vel. Nulla aliquet sapien non fringilla commodo. Nullam venenatis metus et odio tristique, sed sagittis risus auctor. Sed volutpat erat euismod lacus pharetra lacinia. Vivamus mattis velit vel felis dapibus iaculis. Donec leo sapien, scelerisque ac lorem sit amet, pretium fringilla orci. Vivamus vel ante id lectus consequat aliquet. Nam a ultricies lorem, et tempus tellus. Curabitur sit amet nibh aliquet, finibus nulla vel, condimentum dolor."),
      new BlogEntry(2, "Статья с очень-очень-очень длинным заголовком", "Donec in maximus quam. Pellentesque accumsan orci ante, ac porta erat molestie ac. Proin nec tempor mauris. Fusce lacus velit, tempor ut justo eu, tincidunt congue orci. Suspendisse dolor leo, facilisis cursus vulputate at, fermentum id dolor. Maecenas a nisi urna. Donec euismod dui non leo pellentesque, eu dignissim nunc ultricies. Sed sit amet viverra neque. Nullam molestie ultrices erat, vitae fermentum metus. Mauris ut urna eros. Cras massa libero, ullamcorper quis metus nec, ultricies accumsan arcu. Suspendisse efficitur eu nulla eget aliquam. In hac habitasse platea dictumst."),
      new BlogEntry(3, "Ещё одна запись", "Sed ipsum tellus, bibendum ut odio in, sodales rhoncus dolor. Aliquam porta mauris sit amet venenatis cursus. Phasellus aliquet ligula lectus, id consequat nisl tempor non. Donec nec tellus nunc. Nunc cursus feugiat aliquam. Nunc nec euismod turpis. Integer porttitor et justo ut aliquam. Cras gravida dui vestibulum dolor suscipit, sit amet sagittis quam aliquet. Vestibulum elit justo, semper quis molestie eu, pretium et ipsum. Proin tempus mi sed est blandit, quis finibus nisi tristique. Nam eleifend est id est fermentum ullamcorper. Cras et dictum purus. Aliquam eu efficitur neque."),
      new BlogEntry(58, "Четвёртая запись в этом блоге", "Sed quis consequat diam. Sed eleifend vitae mi ut congue. Nullam a tellus lectus. Integer eu egestas dolor. Quisque eu egestas erat. Donec condimentum tempor malesuada. Morbi vitae mollis orci."),
      new BlogEntry(5, "Заключительная статья", "Praesent sed semper est. Proin sodales vel arcu eu fermentum. Phasellus eget faucibus enim. Vestibulum quis finibus sapien. Pellentesque tempor quam vel purus venenatis, ut luctus velit pretium. Ut dictum, augue in tempus blandit, nisl nisi volutpat ex, id luctus dui erat et leo. Phasellus ligula tortor, dignissim et lorem nec, scelerisque accumsan nisi. Pellentesque pharetra sem sit amet turpis egestas, id luctus ex fringilla."),
    ]

    return { entries }
  }

  genId(entries: BlogEntry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.id ?? 1)) + 1 : 1
  }
}
