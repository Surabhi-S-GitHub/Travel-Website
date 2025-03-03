import React from "react";
import { Grid, Box, Button, TextField } from "@mui/material";
import AddressCard from "../AdressCard/AddressCard";

function DeliveryAddress() {

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload on form submit

    // Create FormData object from the form
    const data = new FormData(e.currentTarget);

    // Log FormData to check its contents
    console.log("Form Data:", data);

    // Construct the address object using FormData
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      StreetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipcode"),
      mobile: data.get("phone number")
    };

    // Log the address object to check the captured values
    console.log("Address:", address);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard/>
            <Button variant="contained" size="large" sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}>
              Deliver here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="street-address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="street-address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipcode"
                    name="zipcode"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping-postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone number"
                    name="phone number"
                    label="Phone number"
                    fullWidth
                    autoComplete="phone-number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant="contained" size="large" sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}>
                    Deliver here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddress;
