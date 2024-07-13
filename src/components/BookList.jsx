import Book from './Book';
import BookImage from './assets/390534aba48c597fb75aa2b7369359aa.jpg';


const BookList = () => {
    const handleButtonClick = (title, characters) => {
        console.log(`Book Title: ${title}`);
        console.log('Characters:', characters.join(', '));
      };
  return (
    <div>
      <Book
      image={BookImage}
      title="The Great Gatsby"
      description="A novel written by American author F. Scott Fitzgerald."
      characters={['Nick Carraway', 'Jay Gatsby', 'Daisy Buchanan']}
      onButtonClick={handleButtonClick}
      ></Book>
    </div>
  )
}

export default BookList;

