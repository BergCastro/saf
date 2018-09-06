import React from "react";
import MenuTree from "./menutree";
import MenuItem from "./menuitem";

export default props => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu tree" data-widget="tree">
        <li className="header" />

        
        <MenuItem path="/" name="Dashboard" icon="dashboard" />       
        <MenuTree name="Testes Fisicos" icon="edit">
          <MenuItem
            path="/testesFisicos"
            name="Testes Físicos"
            icon="circle-o"
          />
          <MenuItem
            path="/tiposTestes"
            name="Tipos de Testes"
            icon="circle-o"
          />
        </MenuTree>
        <MenuItem path="/avaliados" name="Avaliados" icon="edit" />
        <MenuItem path="/comissao" name="Comissão" icon="edit" />

        <MenuTree name="ADM" icon="edit">
          <MenuItem path="/usuarios" name="Dados Gerais" icon="circle-o" />
          <MenuItem path="/usuarios" name="Usuários" icon="circle-o" />
        </MenuTree>
      </ul>
    </section>
  </aside>
);
