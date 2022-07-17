import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuthState } from "../../../firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { colors } from "../../../utils/colors";
import { RiSecurePaymentFill } from "react-icons/ri";
import axios from "axios";

const Payment = () => {
  const [loading, setIsLoading] = useState(false);
  const [state, setState] = useState("Fee Payment Transaction Form");
  const [error, setError] = useState("");
  const [cards, setCards] = useState([]);
  const [type, setType] = useState(null);
  const { isAuthenticated } = useAuthState();
  const form = useRef();
  const refto = `cards/${isAuthenticated?.uid}/`;

  useEffect(() => {
    try {
      onValue(ref(getDatabase(), refto), (snapshot) => {
        setCards([]);
        snapshot.forEach(function (childSnapshot) {
          let data = childSnapshot.val();
          console.log("Parent: ", childSnapshot.key);
          setCards((g) => [...g, data]);
        });
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const addGroup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const institution = e.target[0].value;
    const option = e.target[1].value;
    const account = e.target[2].value;
    const amount = e.target[3].value;

    if (type === "Mobile Money (Momo)" && account.length !== 10) {
      setError("Mobile number must be 10 digits");
      setIsLoading(false);
      return;
    }

    console.log({ institution, option, account });

    const db = getDatabase();
    await set(ref(db, "payments/" + isAuthenticated?.uid + `/${Date.now()}`), {
      institution,
      option,
      account,
      amount,
      approved: false,
      date: new Date(),
    })
      .then(async (v) => {
        setState("Transaction Completed");
        axios
          .post("http://localhost:5050/api/sendMessage", {
            patientPhone: `+233${account}`,
            message:
              "An amount of GH₵ " +
              amount +
              " was succesfully transferred to " +
              institution,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        form.current.reset();
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
      <h5>
        <RiSecurePaymentFill size={30} color={colors.secondary} /> {state}
      </h5>
      <Form onSubmit={(e) => addGroup(e)} ref={form}>
        <Form.Group className="mb-3" controlId="formBasicSecurity">
          <Form.Label>Institution</Form.Label>
          <Form.Select>
            <option>Ghana Communication Technology University (GCTU)</option>
            <option>Coventry University (CU)</option>
          </Form.Select>
          <Form.Text className="text-muted">
            choose your institution from the options above
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSecurity">
          <Form.Label>Payment Option</Form.Label>
          <Form.Select onChange={(e) => setType(e.target.value)}>
            <option>Credit Card</option>
            <option>Mobile Money (Momo)</option>
          </Form.Select>
        </Form.Group>

        {type === "Credit Card" || type === null ? (
          <Form.Group className="mb-3" controlId="formBasicSecurity">
            <Form.Label>Select Card</Form.Label>
            <Form.Select>
              {Object?.values(cards).map((val) => (
                <option key={val.number}>
                  {val.name + "  "}•••• •••• ••••{" "}
                  {val?.number[12] +
                    val?.number[13] +
                    val?.number[14] +
                    val?.number[15]}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        ) : (
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter number" required />
            <Form.Text className="text-muted">
              Mobile money number for transaction.
            </Form.Text>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="3,400" required />
          <Form.Text className="text-muted">
            currency is in Ghana Cedis
          </Form.Text>
        </Form.Group>

        <p style={{ color: loading ? "green" : "red" }}>{error}</p>
        <Button
          style={{ marginRight: 10 }}
          variant="danger"
          type="reset"
          onClick={() => {
            setState("Fee Payment Transaction Form");
            setIsLoading(false);
          }}
        >
          Clear
        </Button>
        <Button variant="primary" type="submit" disabled={loading}>
          Complete Payment
        </Button>
      </Form>
    </>
  );
};

export default Payment;
