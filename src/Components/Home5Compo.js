import React from "react";
import { Accordion } from "react-bootstrap";
function Home5Compo() {
  const Style = {
    height: "fitContent",
    minHeight:"150vh",

    borderBottom: "10px solid grey",
    width: " 100wh",
    display: " flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: " center",
  };

  return (
    <div className="ab" style={Style}>
      <h1 style={{ fontSize: "60px", marginBottom: "50px" }}>
        Frequently Asked Questions
      </h1>
      <div className="accordian_div">
        <Accordion>
          <Accordion.Item
            style={{ marginBottom: "10px", backgroundColor: "grey" }}
            eventKey="0"
          >
            <Accordion.Header variant="secondary">
              <h1 style={{ fontSize: "35px" }}>What is Netflix?</h1>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "30px" }}>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            style={{ marginBottom: "10px", backgroundColor: "grey" }}
            eventKey="1"
          >
            <Accordion.Header>
              {" "}
              <h1 style={{ fontSize: "35px" }}>How much does Netflix costs</h1>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "30px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            style={{ marginBottom: "10px", backgroundColor: "grey" }}
            eventKey="2"
          >
            <Accordion.Header>
              <h1 style={{ fontSize: "35px" }}>Where can I Watch?</h1>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "30px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            style={{ marginBottom: "10px", backgroundColor: "grey" }}
            eventKey="3"
          >
            <Accordion.Header>
              <h1 style={{ fontSize: "35px" }}>How do I cancel?</h1>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "30px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            style={{ marginBottom: "10px", backgroundColor: "grey" }}
            eventKey="4"
          >
            <Accordion.Header>
              <h1 style={{ fontSize: "35px" }}>How can I watch Netflix?</h1>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "30px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            style={{ marginBottom: "10px", backgroundColor: "grey" }}
            eventKey="5"
          >
            <Accordion.Header>
              <h1 style={{ fontSize: "35px" }}>Is Netflix good for kids?</h1>
            </Accordion.Header>
            <Accordion.Body style={{ fontSize: "30px" }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Home5Compo;
