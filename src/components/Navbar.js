import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/stock-update">Atualizar Estoque</Link></li>
        <li><Link to="/reports">Relatórios</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
