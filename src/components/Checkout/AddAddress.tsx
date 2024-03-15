import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createOrder } from "../../../Redux/Customers/Order/Action";
import userEvent from "@testing-library/user-event";
import AddressCard from "../adreess/AdreessCard";
import { useState } from "react";

type Cardsprops={
  handleNext : any
}

export default function AddDeliveryAddressForm(props:Cardsprops) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  // const { auth } = useSelector((store) => store);
  // const [selectedAddress, setSelectedAdress] = useState(null);
  

  // console.log("auth", auth);

  

  // const handleSubmit = (event:any) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console

  //   const address = {
  //     firstName: data.get("firstName"),
  //     lastName: data.get("lastName"),
  //     streetAddress: data.get("address"),
  //     city: data.get("city"),
  //     state: data.get("state"),
  //     zipCode: data.get("zip"),
  //     mobile: data.get("phoneNumber"),
  //   };
  //    navigate('/Checkout/?step=3')
  //   // dispatch(createOrder({ address, jwt, navigate }));
  //   // after perfoming all the opration
  //   props.handleNext();
  // };

  // const handleCreateOrder = () => {
  //   // dispatch(createOrder({ address:item, jwt, navigate }));
  //   handleNext();
  // };

  return (
    <Grid container spacing={4} className="p-[3rem]">
      {/* <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          {auth.user?.addresses.map((item) => (
            <div onClick={() => setSelectedAdress(item)} className="p-5 py-7 border-b cursor-pointer">
              {" "}
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => handleCreateOrder(item)}
                >
                  Deliverd Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid> */}
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form>
            <Grid container spacing={3} >
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
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
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
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                onClick={() => navigate('/Checkout/?step=3')}
                sx={{ padding: ".9rem 1.5rem" }} size="large" type="submit" variant="contained" color="primary">
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
