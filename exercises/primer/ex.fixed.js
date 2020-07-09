// function addFavoriteBook(bookName) {
// 	if (!bookName.includes("Great")) {
// 		favoriteBooks.push(bookName);
// 	}
// }

// function printFavoriteBooks() {
// 	console.log(`Favorite Books: ${favoriteBooks.length}`);
// 	for (let bookName of favoriteBooks) {
// 		console.log(bookName);
// 	}
// }





































//Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.

function addFavoriteBook(bookName) {
    //If `bookName` does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName)

    }
  
}


function printFavoriteBooks() {
    //`printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.
    console.log(`Favorite Books: ${favoriteBooks.length}`)
    for (let i = 0; i < favoriteBooks.length; i++) {
        console.log(favoriteBooks[i])

    }
}






var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
console.log(favoriteBooks)
// print out favorite books
// printFavoriteBooks();
