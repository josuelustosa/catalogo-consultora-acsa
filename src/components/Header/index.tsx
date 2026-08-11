import Container from "../Container";
import NavBar from "./NavBar";
import NavBrand from "./NavBrand";

function Header() {
  return (
    <header className="w-full bg-primary py-4">
      <Container>
        <div className="flex flex-col gap-3">
          <NavBrand />
          <NavBar />
        </div>
      </Container>
    </header>
  );
}

export default Header;
