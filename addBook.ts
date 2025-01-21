
interface Book {
    "title": String
}

export default async function addBook(book: Book): Promise<void> {
const URL = "http://localhost:3000/books"

try {

    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Conntent-Type": "application/json",
        },
        body: JSON.stringify(book),
    });
    if (!response.ok) {
        throw new Error(`Failed to add the new book: ${response.statusText}`);
    }
    const addedBook = await response.json();

    // Updating the DOM
    const bookList  = document.getElementById("book-list");
    if (bookList) {
        const newBookItem = document.createElement("li");
        newBookItem.textContent = addedBook.title;
        bookList.appendChild(newBookItem);
    }
} catch (error) {
    console.error("Error adding book:", error)
  }
}