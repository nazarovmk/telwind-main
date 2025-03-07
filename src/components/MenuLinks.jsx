import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "About",
    path: "/About",
  },
  {
    id: 2,
    text: "Contact",
    path: "/contact",
  },
  {
    id: 3,
    text: "Katalog",
    path: "/katalog",
  },
];

export function MenuLinks() {
  return links.map((link) => {
    return (
      <li key={link.id}>
        <Link to={link.path}>{link.text}</Link>
      </li>
    );
  });
}
