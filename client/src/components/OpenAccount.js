import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const OpenAccount = () => {
  const [legalName, setLegalName] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [citizenshipStatus, setCitizenStatus] = useState("");
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [initialAmount, setInitialAmount] = useState("");
  const [benificiaryName, setBenificiaryName] = useState("");
  const [benificiaeySSN, setBenificiarySSN] = useState("");

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Full legal Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setLegalName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Date of Birth (MM/DD/YYYY):
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Social Security Number
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setSsn(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Address</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Citizenship Status
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setCitizenStatus(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Country of Residence
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setCountryOfResidence(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Employment Status
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setEmploymentStatus(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Annual Income
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setAnnualIncome(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Initial Amount Deposit
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setInitialAmount(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Benificiary Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setBenificiaryName(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Benificiary SSN
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => {
            setBenificiarySSN(e.target.value);
          }}
        />
      </InputGroup>
    </>
  );
};

export default OpenAccount;
