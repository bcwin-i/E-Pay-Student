import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { Form, Button } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import { colors } from "../../../utils/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useAuthState } from "../../../firebase";

const Review = () => {
  const [join, setJoin] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cards, setCards] = useState([]);
  const { isAuthenticated } = useAuthState();
  const refto = `cards/${isAuthenticated?.uid}/`;

  useEffect(() => {
    try{
    onValue(ref(getDatabase(),refto), (snapshot) => {
      setCards([]);
      snapshot.forEach(function (childSnapshot) {
        let data = childSnapshot.val();
        console.log("Parent: ", childSnapshot.key);
        setCards((g) => [...g, data]);
      });
    });
  }catch(e){
    console.error(e)
  }
  }, []);

  const addGroup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const name = e.target[0].value;
    const number = e.target[1].value;
    const expiration = e.target[2].value;
    const cvv = e.target[3].value;

    if (number.length !== 16) {
      setError("Card number must be 16 digits");
      setIsLoading(false);
      return;
    }

    if (cvv.length !== 3) {
      setError("CVV must be 3 digits");
      setIsLoading(false);
      return;
    }

    const db = getDatabase();
    await set(ref(db, "cards/" + isAuthenticated?.uid + `/${number}`), {
      name,
      number,
      expiration,
      cvv,
    })
      .then(async (v) => {
        setJoin(false);
      })
      .catch((e) => {
        console.error(e);
        setError("Error setting up appointment.");
        setIsLoading(false);
      });

    setIsLoading(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 0.7,
            borderRadius: 10,
            backgroundColor: colors.secondary,
            padding: 15,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <p style={{ color: "white", fontSize: 40, fontWeight: 500 }}>
              Your TUITION
            </p>
            <p style={{ color: "white", fontSize: 18, fontWeight: 400 }}>
              payment in your own hand
            </p>
            <p style={{ color: colors.accent, fontSize: 14, marginTop: 30 }}>
              A handy tool for all things payments. With benefits such a
              solution are multipurposeness, transparency and accountability.
            </p>
          </div>
          <img
            style={{ height: 250, width: 250, alignSelf: "flex-end" }}
            src={require("../../../assets/purse.png")}
            alt="purse"
          />
        </div>
        <div
          style={{
            flex: 0.28,
            borderRadius: 10,
            backgroundColor: colors.accent,
            padding: 15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: colors.primary,
                fontWeight: 400,
                fontSize: 20,
              }}
            >
              Added cards
            </p>
            <MdAdd
              size={30}
              color={colors.primary}
              title="Add card"
              style={{ cursor: "pointer" }}
              onClick={() => setJoin(!join)}
            />
          </span>
          {Object?.values(cards).map((val) => (
            <span
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}

              key={val?.number}
            >
              <img
                src={require("../../../assets/visa.png")}
                style={{ height: 60, width: 60 }}
                alt="visa"
              />
              <h4
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                •••• •••• •••• {val?.number[12]+val?.number[13]+val?.number[14]+val?.number[15]}
              </h4>
            </span>
          ))}
        </div>
      </div>
      <AnimateHeight
        duration={500}
        height={join ? "auto" : "0%"}
        style={{
          marginBottom: 20,
          borderWidth: join ? 1 : 0,
          borderStyle: "solid",
          borderColor: colors.accent,
          borderRadius: 5,
          padding: 20,
          width: "100%",
          marginTop: 10,
          opacity: join ? 1 : 0,
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <h5>Payment card form</h5>
        <Form onSubmit={(e) => addGroup(e)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Card owner</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
            <Form.Text className="text-muted">
              Displayed name on your cars.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="number"
              maxLength={14}
              size={14}
              placeholder="Type card number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control type="date" placeholder="Type description" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="number"
              placeholder="Type description"
              required
            />
          </Form.Group>

          {/*<Form.Group className="mb-3" controlId="formBasicSecurity">
          <Form.Label>Select security type</Form.Label>
          <Form.Select>
            <option>Public</option>
            <option>Private</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms" />
        </Form.Group>
        */}
          <p style={{ color: loading ? "green" : "red" }}>{error}</p>
          <Button
            style={{ marginRight: 10 }}
            variant="danger"
            type="reset"
            onClick={() => {
              setError("");
              setIsLoading(false);
              setJoin(false);
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
      </AnimateHeight>
      <div
        style={{
          borderRadius: 10,
          backgroundColor: colors.accent,
          padding: 15,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          fontWeight: 600,
        }}
      >
        Cash Balance{" "}
        <h3 style={{ color: colors.secondary, fontSize: 30 }}>GH₵ 5,653.33</h3>
      </div>
    </>
  );
};

export default Review;
