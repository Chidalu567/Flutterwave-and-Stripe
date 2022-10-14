import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Head from 'next/head';



// ---- stateless component definition
const checkoutPage = () => {
  const [message, setMessage] = useState(""); // ---- useState definition

  // ----- UseEffect to get the param returned on success_url or cancel_url from stripe session
  useEffect(() => {
    const query = new URLSearchParams(window.location.search); // ---- returns a javascrpit object containing the query in search
    if (query.get("success")) {
      setMessage("Payment Successfull. You would receive an email soon");
    }

    if (query.get("canceled")) {
      setMessage("Payment unsuccessfull. You need to retry")
    }

  }, []);


  // // ---- Handle submit function
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("button working");
  //   // This should put a query for our search param.
  //   await axios.get('http://localhost:5000/api/create-checkout-session');
  // }

    return (
      <Container>
        {message && <Message>{message}</Message>}
        <Form action="http://localhost:5000/api/create-checkout-session" method="POST">
          <Button type="submit">Checkout</Button>
        </Form>

      </Container>
    )
}

export default checkoutPage; // ---- Export for routing to.


// ------ UI component definition
const Button = styled.button`
  margin-left:50vw;
  margin-top:50vh;
  padding:30px;
  background-color:turquoise;
  color:lightWhite;
  font-size:30px;
  font-weight:500;
  border:0px solid transparent;
  box-sizing:border-box;
  &:hover {
    color:white;
    font-weight:700;
  }
`;

const Form = styled.form`

`;

const Container = styled.div``;

const Message = styled.h1``;