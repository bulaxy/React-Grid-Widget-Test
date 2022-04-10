
import { WidthProvider, Responsive } from "react-grid-layout";
import { useReactGridContext, ReactGridProvider } from "../../contexts/ReactGridContext"
import { Accordion, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BsGearFill } from "react-icons/bs"
import GridSetting from "./GridSetting"

export default function GridContentLayout() {
    const { items, editMode } = useReactGridContext()

    return (
        <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#" className='h2' style={{ fontFamily: 'Rubik Moonrocks' }}>BuLaxy</Navbar.Brand>
                <Navbar.Text className="ml-auto">123</Navbar.Text>
                <Navbar.Toggle aria-controls="reactGridOffcanvasNavbar">
                    <BsGearFill />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="reactGridOffcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">SiteSetting</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <GridSetting />
                            </Accordion.Item>
                        </Accordion>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
