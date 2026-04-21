
START TRANSACTION;


-- Rick Riordan Author + Book Inserts

INSERT INTO Author 
	(firstName, lastName)
VALUES
	('Rick', 'Riordan'); 


SET @author_id = LAST_INSERT_ID();


INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0-7868-3865-3', 'The Lightning Thief', 416, 149, 'FICTION', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Kristen Applebees', 'Ive read better', 3, @book_id),
	('Fabian Seacaster', 'Burn all copies of this book', 1, @book_id),
	('Riz Gukgak', 'The author really knows what theyre doing', 4, @book_id),
	('Adaine Abernanth', 'Couldve been a lot better', 2, @book_id),
	('Gorgug Thistlespring', 'I am in utter awe at the way the author wrote this', 5, @book_id);	
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1417776122', 'The Sea of Monsters', 320, 115, 'FICTION', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Gorgug Thistlespring', 'Not very memorable', 3, @book_id),
	('Kristen Applebees', 'This is a disappointment to humanity', 1, @book_id),
	('Fabian Seacaster', 'You can tell the author put their heart into this', 4, @book_id),
	('Riz Gukgak', 'I regret the time I spent reading this', 2, @book_id),
	('Adaine Abernanth', 'This book changed my very soul', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1423101451', 'The Titan\'s Curse', 320, 117, 'FICTION', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Adaine Abernanth', 'Pretty bland', 3, @book_id),
	('Gorgug Thistlespring', 'Kill the author', 1, @book_id),
	('Kristen Applebees', 'I would definitely reread this book', 4, @book_id),
	('Fabian Seacaster', 'It feels like this was written in 30 minutes with little thought to plot', 2, @book_id),
	('Riz Gukgak', 'This book is my new religion', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1423131984', 'The Battle of the Labyrinth', 367, 126, 'FICTION', @author_id);

SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Riz Gukgak', 'Ive already forgotten what happened', 3, @book_id),
	('Adaine Abernanth', 'This book made me lose faith in society', 1, @book_id),
	('Gorgug Thistlespring', 'I cant wait for the next book to come out, sooooo good', 4, @book_id),
	('Kristen Applebees', 'It is hard to even call this a book', 2, @book_id),
	('Fabian Seacaster', 'This book left me in tears from how good it was', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1423101475', 'The Last Olympian', 400, 141, 'FICTION', @author_id);
	
SET @book_id = LAST_INSERT_ID();


INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Fabian Seacaster', 'This is the book equivalent of beige paint', 3, @book_id),
	('Riz Gukgak', 'I vomitted multiple times while reading this book', 1, @book_id),
	('Adaine Abernanth', 'I loved the world the author created', 4, @book_id),
	('Gorgug Thistlespring', 'I gave up halfway through', 2, @book_id),
	('Kristen Applebees', 'I cant believe I survived before reading this book', 5, @book_id);	
	
	
-- Holly Black Author + Book Inserts

INSERT INTO Author 
	(firstName, lastName)
VALUES
	('Holly', 'Black'); 


SET @author_id = LAST_INSERT_ID();


INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316310314', 'The Cruel Prince', 416, 151,'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Kingston Brown', 'Its kinda mid', 3, @book_id),
	('Kugrash', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Sofia Bicicleta', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Ricky Matsui', 'Its like the author didnt even try', 2, @book_id),
	('Pete Conlan', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316310321', 'The Wicked King', 368, 128,'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Pete Conlan', 'Its kinda mid', 3, @book_id),
	('Kingston Brown', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Kugrash', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Sofia Bicicleta', 'Its like the author didnt even try', 2, @book_id),
	('Ricky Matsui', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316310376', 'The Queen of Nothing', 336, 121,'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Ricky Matsui', 'Its kinda mid', 3, @book_id),
	('Pete Conlan', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Kingston Brown', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Kugrash', 'Its like the author didnt even try', 2, @book_id),
	('Sofia Bicicleta', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316592697', 'The Stolen Heir', 400, 140,'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Sofia Bicicleta', 'Its kinda mid', 3, @book_id),
	('Ricky Matsui', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Pete Conlan', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Kingston Brown', 'Its like the author didnt even try', 2, @book_id),
	('Kugrash', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316592710', 'The Prisoners Throne', 368, 129,'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Kugrash', 'Its kinda mid', 3, @book_id),
	('Sofia Bicicleta', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Ricky Matsui', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Pete Conlan', 'Its like the author didnt even try', 2, @book_id),
	('Kingston Brown', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
	

-- Stephanie Garber Author + Book Inserts 
	
INSERT INTO Author 
	(firstName, lastName)
VALUES
	('Stephanie', 'Garber'); 


SET @author_id = LAST_INSERT_ID();


INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1250095268', 'Caraval', 448, 156, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Gunthrie Miggles-Rashback', 'Its kinda mid', 3, @book_id),
	('Norman Takamori', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Barry 5', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Riva', 'Its like the author didnt even try', 2, @book_id),
	('Margaret Mancino', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);

INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1250095329', 'Legendary', 510, 189, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Margaret Mancino', 'Its kinda mid', 3, @book_id),
	('Gunthrie Miggles-Rashback', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Norman Takamori', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Barry 5', 'Its like the author didnt even try', 2, @book_id),
	('Riva', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1250157683', 'Finale', 512, 191, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Riva', 'Its kinda mid', 3, @book_id),
	('Margaret Mancino', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Gunthrie Miggles-Rashback', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Norman Takamori', 'Its like the author didnt even try', 2, @book_id),
	('Barry 5', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1250268402', 'Once Upon a Broken Heart', 432, 145, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Barry 5', 'Its kinda mid', 3, @book_id),
	('Riva', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Margaret Mancino', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Gunthrie Miggles-Rashback', 'Its like the author didnt even try', 2, @book_id),
	('Norman Takamori', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1250268433', 'The Ballad of Never After', 432, 144, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Norman Takamori', 'Its kinda mid', 3, @book_id),
	('Barry 5', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Riva', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Margaret Mancino', 'Its like the author didnt even try', 2, @book_id),
	('Gunthrie Miggles-Rashback', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1250851215', 'A Curse for True Love', 400, 140, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Gunthrie Miggles-Rashback', 'Its kinda mid', 3, @book_id),
	('Norman Takamori', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Barry 5', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Riva', 'Its like the author didnt even try', 2, @book_id),
	('Margaret Mancino', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);	
	
	
-- Sarah Maas Author + Book Inserts 	
	
INSERT INTO Author 
	(firstName, lastName)
VALUES
	('Sarah', 'Maas'); 


SET @author_id = LAST_INSERT_ID();


INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1635575569', 'A Court of Thorns and Roses', 448, 157, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Pinocchio', 'Its kinda mid', 3, @book_id),
	('Pib', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Rosalind', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Gerard', 'Its like the author didnt even try', 2, @book_id),
	('Timothy Goose', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1635575583', 'A Court of Mist and Fury', 656, 251, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Timothy Goose', 'Its kinda mid', 3, @book_id),
	('Pinocchio', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Pib', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Rosalind', 'Its like the author didnt even try', 2, @book_id),
	('Gerard', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1635575606', 'A Court of Wings and Ruin', 736, 294, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Gerard', 'Its kinda mid', 3, @book_id),
	('Timothy Goose', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Pinocchio', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Pib', 'Its like the author didnt even try', 2, @book_id),
	('Rosalind', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1635575620', 'A Court of Frost and Starlight', 272, 101, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Rosalind', 'Its kinda mid', 3, @book_id),
	('Gerard', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Timothy Goose', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Pinocchio', 'Its like the author didnt even try', 2, @book_id),
	('Pib', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1635577990', 'A Court of Silver Flames', 784, 311, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Pib', 'Its kinda mid', 3, @book_id),
	('Rosalind', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Gerard', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Timothy Goose', 'Its like the author didnt even try', 2, @book_id),
	('Pinocchio', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
	
-- Rebecca Yarros Author + Book Inserts 
	
INSERT INTO Author 
	(firstName, lastName)
VALUES
	('Rebecca', 'Yarros'); 


SET @author_id = LAST_INSERT_ID();


INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1649377371', 'Fourth Wing', 544, 202, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Olethra MecCloud', 'Its kinda mid', 3, @book_id),
	('Pappy', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Van Chapman', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Monty LaMontgomerry', 'Its like the author didnt even try', 2, @book_id),
	('Maxwell Gotch', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1649377579', 'Iron Flame', 640, 247, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Maxwell Gotch', 'Its kinda mid', 3, @book_id),
	('Olethra MecCloud', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Pappy', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Van Chapman', 'Its like the author didnt even try', 2, @book_id),
	('Monty LaMontgomerry', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-1649374189', 'Onyx Storm', 544, 203, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Monty LaMontgomerry', 'Its kinda mid', 3, @book_id),
	('Maxwell Gotch', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Olethra MecCloud', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Pappy', 'Its like the author didnt even try', 2, @book_id),
	('Van Chapman', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
	
-- Rachel Gillig Author + Book Inserts 
	
INSERT INTO Author 
	(firstName, lastName)
VALUES
	('Rachel', 'Gillig'); 


SET @author_id = LAST_INSERT_ID();


INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316312486', 'One Dark Window', 432, 151, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id),
	(false, @book_id),
	(false, @book_id);
	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(true, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Van Chapman', 'Its kinda mid', 3, @book_id),
	('Monty LaMontgomerry', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Maxwell Gotch', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Olethra MecCloud', 'Its like the author didnt even try', 2, @book_id),
	('Pappy', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
INSERT INTO Book
	(ISBN, title, pageLength, duration, genre, authorId)
VALUES
	('978-0316312714', 'Two Twisted Crowns', 480, 179, 'FANTASY', @author_id);
	
SET @book_id = LAST_INSERT_ID();

INSERT INTO PhysicalBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(false, @book_id),
	(true, @book_id);	
	
INSERT INTO AudioBookCopy
	(checkedOut, bookId)
VALUES
	(false, @book_id),
	(true, @book_id),
	(false, @book_id);
	
INSERT INTO BookReview
	(reviewerName, review, rating, bookId)
VALUES
	('Pappy', 'Its kinda mid', 3, @book_id),
	('Van Chapman', 'This is the absolute worst book in the existance of literature', 1, @book_id),
	('Monty LaMontgomerry', 'This was a pretty goof book, would recommend to a friend', 4, @book_id),
	('Maxwell Gotch', 'Its like the author didnt even try', 2, @book_id),
	('Olethra MecCloud', 'This book literally the best book I have ever read, I dont know how I survived without it', 5, @book_id);
	
	
COMMIT; 