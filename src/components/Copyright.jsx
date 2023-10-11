import { copyright } from "../data";
const Copyright = () => {
  const { copyText, links, social } = copyright;
  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="200"
    >
      <div className="flex">
        {links.map((item, idx) => {
          const { href, name } = item;
          return (
            <a key={idx} className="hover:text-accent transition" href={href}>
              {name}
            </a>
          );
        })}
      </div>
      <div>{copyText}</div>
      <ul className="flex gap-x-[12px]">
        {social.map((item, idx) => {
          const { href, icon } = item;
          return (
            <li key={idx}>
              <a href={href}>
                <img src={icon} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
