import React, { useContext } from "react";
import TourContext from "../Store/tour-context";
import classes from "./Home.module.css";
import { Button, Container, Table } from "react-bootstrap";
const Home = (props) => {
  const tourCtx = useContext(TourContext);
  return (
    <>
      <div className="p-5 text-center bg-light">
        <button className={classes.album}>Get our Latest Album</button>
        <button className={classes.play}>Play</button>
      </div>
      <Container style={{ width: "50rem" }}>
        <h2 className={classes.header}>TOURS</h2>
        <Table responsive="md" size="sm">
          <tbody>
            {tourCtx.tours.map((tour) => (
              <tr key={Math.random()}>
                <td key="date">{tour.date}</td>
                <td key="location">{tour.location}</td>
                <td key="venue">{tour.venue}</td>
                <td>
                  <Button variant="primary" className={classes.buyTickets}>
                    Buy Tickets
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default Home;
