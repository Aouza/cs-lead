import React from "react";
import { Container } from "./styles";

import { MenuItems } from "../../services/api";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <Container>
      {MenuItems.map((menu) => {
        return <MenuItem key={menu.name} name={menu.name} url={menu.url} />;
      })}
    </Container>
  );
};

export default Menu;
