import { nav } from "../data";
const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <a className="hover:text-accent transition" href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
