import "./styles.css";

export default function App() {
  return (
    // <div className="App"></div>
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51szd1izDeL._SX258_BO1,204,203,200_.jpg"
    alt=""
  />
);
const Title = () => <h3> This is book</h3>;
const Author = () => <h5> Adam hop</h5>;
