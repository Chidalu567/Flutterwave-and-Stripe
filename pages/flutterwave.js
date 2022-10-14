import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import axios from 'axios';



// ---- stateless component definition
const CheckoutPage = () => {

  // state to hold user informations
  const [person, setPerson] = useState({ name: '', email: '',amount:'' });

  // function to handle change event from input button
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // dynamic updation of object keys
    setPerson({ ...person, [name]: value });
  }


  // function to handle submit event
  const handleSubmit = async() => {
    const response = await axios({
      url: 'http://localhost:5000/api/create-checkout-session-flutter_wave',
      method: 'post',
      data: {
        username:person.name,
        useremail: person.email,
        amount : person.amount
      }
    });

  // direct client to the checkout page
    if (response.data.link) {
      const link = response.data.link;
      window.location.href=link
    }
}

    return (
        <Container>
            <Form>
                <Input type="text" name="name" placeholder='Enter your username' onChange={handleChange}/>
                <Input type="email" name="email" placeholder='Enter your useremail' onChange={handleChange} />
                <Input type="text" name="amount" placeholder='Enter amount' onChange={handleChange} />
                <Button type="button" onClick={handleSubmit}>Proceed to Checkout</Button>
            </Form>
        </Container>
    )
}

export default CheckoutPage; // ---- Export for routing to.


// ------ UI component definition
const Button = styled.button`

`;

const Form = styled.form`
  margin-left: 40vw;
  margin-top:100px;
`;


const Container = styled.div``;

const Input = styled.input`
  display:block;
  margin-top: 40px;
`;

const Label = styled.label``;