import Container from 'react-bootstrap/Container';
import logo from "../assets/wsei-logo.png";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start align-items-center d-flex just-content-center">
      <Container>
      <div className="d-flex justify-content-between align-items-center">
        <img src={logo} alt='WSEI' width={'200px'}></img>
        <div>milosz.pradela@microsoft.wsei.edu.pl</div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;

