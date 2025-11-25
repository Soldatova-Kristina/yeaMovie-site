import {Link} from "react-router-dom";

export function Logo({className}) {
    return (
    <Link to="/" className={className}>
      <img src="/icons/logo.svg" alt="Kinomonster" />
    </Link>
  );
}