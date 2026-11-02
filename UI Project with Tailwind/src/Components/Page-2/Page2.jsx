export default function Section2() {
  return (
    <section className="min-h-screen w-full  flex items-center justify-center px-6 md:px-20 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-black text-white text-sm tracking-widest px-6 py-3 uppercase">
            Banking, simplified
          </span>
          <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-black">
            Banking that fits <span className="text-white">your pocket</span>
          </h2>
          <p className="mt-6 text-lg text-gray-800 max-w-md">
            Open an account, send money and build credit, all from your phone in
            minutes.
          </p>
        </div>

        <div className="h-[500px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/32642487/pexels-photo-32642487.jpeg"
            alt="banking app"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
