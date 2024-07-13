const Book = ({image, title, description, characters, onButtonClick}) => {
    return(
        <div className="book">
            <img src={image} alt={title} className="book-image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Characters:</h3>
            <ul className="listStyle">
                {characters.map((character,index)=>(
                    <li key={index}>{character}</li>
                ))}
            </ul>
            <button onClick={() => onButtonClick(title, characters)}>Click Me</button>
        </div>
    );
};

export default Book;