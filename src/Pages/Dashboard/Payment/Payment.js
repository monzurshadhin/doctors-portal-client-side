import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51Jvy3cI76MEzzR0GbefwW9ucJ7DohUCagGsmuTrtojKGam1S1juMO6IES8CB5Qlj9SYMUZhuHFaNFNkjqH2L9EGy00u3UJYo53"
);
const Payment = () => {
  const { appointmentId } = useParams();
  // console.log(appointmentId);

  const [appointment, setAppointments] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay : ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
