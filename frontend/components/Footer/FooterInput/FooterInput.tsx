import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./FooterInput.module.scss";
import { Button } from "@mui/material";
const FooterInput = () => {
  {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <Form className={styles.Footer__form}>
            <Field name="email" placeholder="Your Email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.form__error}
            />

            <Button
              variant="contained"
              sx={{
                color: "#FFFFFF",
                background: "#49BBBD",
                fontSize: "22px",
                fontWeight: 500,
                borderRadius: "60px",
                textTransform: "none",
                height: "60px",
                marginLeft: "20px",
                width: "179px",
                transform: "translateY(-3px)",
              }}
            >
              Subscribe
            </Button>
          </Form>
        </Formik>
      </div>
    );
  }
};

export default FooterInput;
