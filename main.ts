import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { setupCounter } from './counter.ts'
import addBook from './addBook.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container mt-4">
        <h1>Book List CRD Application</h1>

        <!-- Form to add a New Book -->
         <form id="book-form" class="mb-4">
            <div class="mb-3">
                <label for="book-title" class="form-label">Book Title</label>
                <input type="text" id="book-title" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Add Book</button>
         </form>

         <!-- Book List Display-->
          <ul id="book-list" class="list-group"></ul>
    </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
