import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>

        <div className="products">
          {data?.products.map((item, idx) => (
            <div className="product" key={idx}>
              <a href={`/product/${item.slug}`} >
                <img src={item.image} alt={item.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${item.slug}`} >
                  <p>{item.name}</p>
                </a>
                <p>$ {item.price}</p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
