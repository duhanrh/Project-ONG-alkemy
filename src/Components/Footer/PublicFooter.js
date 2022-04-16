import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';

const PublicFooter = () => {
  const navigation = [
    { to: '/', title: 'Inicio' },
    { to: '/nosotros', title: 'Nosotros' },
    { to: '/novedades', title: 'Novedades' },
    { to: '/actividades', title: 'Actividades' },
    { to: '/contacto', title: 'Contacto' },
  ];

  return (
    <footer className="bg-light">
      <Container className="d-flex flex-wrap justify-content-center">
        <Navbar.Brand>
          <img src={Logo} width="100" className="mt-3" alt="Logo SOMOS MÁS" />
        </Navbar.Brand>
        <Navbar className="w-100 d-none d-lg-flex justify-content-center">
          <Nav>
            {navigation.map((item) => (
              <Nav.Link href={item.to} key={item.title}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <Nav className="w-100 py-2 justify-content-center">
          <a href="/#" className="text-muted mx-3">
            <FaFacebook />
          </a>
          <a href="/#" className="text-muted mx-3">
            <FaInstagram />
          </a>
          <a href="/#" className="text-muted mx-3">
            <FaTwitterSquare />
          </a>
        </Nav>
        <hr className="w-100 my-0 d-inline-block" />
        <p className="my-3 text-muted">
          <small>2022 by Alkemy. All Rights Reserved.</small>
        </p>
      </Container>
    </footer>
  );
};

export default PublicFooter;
