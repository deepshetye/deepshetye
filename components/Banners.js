const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="inner text-gray-400">
      <div className="wrapper">
        <section style={{ '--speed': `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <div className="mx-6">{image}</div>
            </div>
          ))}
        </section>
        <section style={{ '--speed': `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <div className="mx-6">{image}</div>
            </div>
          ))}
        </section>
        <section style={{ '--speed': `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <div className="mx-6">{image}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Banner;
