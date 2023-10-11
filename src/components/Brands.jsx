import { overview } from "../data";
const Brands = () => {
  const { brands } = overview;
  return (
    <section className="py-9 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {brands.map((item, idx) => {
          const { delay, image } = item;
          return (
            <div key={idx} data-aos="fade-up" data-aos-delay={delay}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
