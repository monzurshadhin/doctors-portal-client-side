import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  const { name, time, space,price } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Price:${price}
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        setBookingSuccess={setBookingSuccess}
        booking={booking}
        date={date}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
      ></BookingModal>
    </>
  );
};

export default Booking;
