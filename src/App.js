import "./index.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { SiFoodpanda } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo1 to={"/"} >STARBELLY</Logo1>
          <SiFoodpanda />
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo1 = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2.5rem;
  }

  svg {
    font-size: 3.5rem;
  }
`;

export default App;
