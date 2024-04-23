import React, { useState } from "react";
import { Button, Grid, Typography, Rating, Slider, Box } from "@mui/material";
import Feedback from "../Feedback/Feedback";
import { makeStyles } from "@mui/styles";
import CourseDescription from "../CourseDescription/CourseDescription";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postFeedback } from "@/components/api/course";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { feedbackSchema } from "../../utility/validationSchemas";
import styles from "./Overview.scss";
import RatingBar from "../../RatingBar/RatingBar";

const useStyles = makeStyles({
  tabIndicator: {
    height: 0,
  },

  customFromWrapper: {
    background: "#E2F0FF",
    borderRadius: "20px",
    height: "450px",
  },
  customForm: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  customFormItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  customFormButton: {
    width: "160px",
    fontSize: "16px",
    fontWeight: 500,
    borderRadius: "8px",
    height: "44px",
    border: "none",
    background: "#49BBBD",
    color: "#FFFFFF",
  },
  customButton: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#8A8A8A",
    background: "#E6E6E6",
    textTransform: "none",
    borderRadius: "12px",
    width: "200px",
    height: "63px",
    marginLeft: "30px",
  },
  customActiveButton: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF !important",
    background: "#49BBBD",
    textTransform: "none",
    borderRadius: "12px",
    width: "200px",
    height: "63px",
  },
  statsTitle: {
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "1px",
    color: "#000000",
    opacity: 0.5,
  },
  rateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
});

const Overview = ({ course, feedbacks, ratingData }) => {
  const currentURL = window.location.href;
  const urlPart = currentURL.split("/").pop();
  console.log(ratingData);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Grid
      sx={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid>
        <Grid sx={{ display: "flex", mt: "50px" }}>
          <Box sx={{ width: "100%", typography: "body1", paddingLeft: "0px" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  transform: "translateX(0px)",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="tabs"
                  TabIndicatorProps={{
                    className: classes.tabIndicator,
                  }}
                >
                  <Tab
                    label="Overview"
                    value="1"
                    classes={{
                      selected: classes.customActiveButton,
                      root: classes.customButton,
                    }}
                  />
                  <Tab
                    label="Add feedback"
                    value="2"
                    classes={{
                      selected: classes.customActiveButton,
                      root: classes.customButton,
                    }}
                  />
                  <Tab
                    label="Coming soon"
                    value="3"
                    classes={{
                      selected: classes.customActiveButton,
                      root: classes.customButton,
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid
                  sx={{
                    background: "#E2F0FF",
                    width: "100%",
                    maxWidth: "950px",
                    borderRadius: "20px",
                    mt: "50px",
                    padding: "50px",
                  }}
                >
                  <Grid sx={{ display: "flex" }}>
                    <Grid
                      sx={{
                        background: "#FFFFFF",
                        borderRadius: "20px",
                        width: "255px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "25px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000000",
                          opacity: 0.5,
                          fontSize: "30px",
                          fontWeight: 600,
                          letterSpacing: "1px",
                        }}
                      >
                        {ratingData.avgRating ? ratingData.avgRating : "5"} out
                        of 5
                      </Typography>
                      <Rating name="read-only" value={4} readOnly />

                      <Typography
                        sx={{
                          color: "#000000",
                          opacity: 0.5,
                          fontSize: "20px",
                          letterSpacing: "1px",
                        }}
                      >
                        Top Raiting
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                        gap: "13px",
                      }}
                    >
                      {ratingData.ratingCounts.map((review, index) => (
                        <RatingBar
                          key={index}
                          stars={index}
                          allStars={ratingData.ratingCounts.length}
                          count={review ? review.count : 0}
                        />
                      ))}
                    </Grid>
                  </Grid>
                  <Grid sx={{ mt: "70px" }}>
                    {feedbacks.map((item, index) => (
                      <>
                        <Feedback
                          author={item.nickname}
                          index={index}
                          date={2}
                          rate={item.rating}
                          title={item.review}
                          image="https://images.unsplash.com/photo-1573496774379-b930dba17d8b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Box
                          sx={{
                            width: "100%",
                            height: "1px",
                            background: "#696984",
                            opacity: "0.5",
                            margin: "24px 0px 24px 0px",
                          }}
                        ></Box>
                      </>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid
                  sx={{
                    width: "100%",
                  }}
                >
                  <Formik
                    initialValues={{
                      nickname: "",
                      review: "",
                      courseid: urlPart,
                    }}
                    validationSchema={feedbackSchema}
                    onSubmit={async (values) => {
                      console.log(values);

                      try {
                        const response = await postFeedback(values);
                        console.log(response.data);
                      } catch (err) {
                        toast.error("connection error!", {
                          position: toast.POSITION.TOP_LEFT,
                        });
                      }
                    }}
                  >
                    {({ values, setFieldValue }) => (
                      <div className={classes.customFromWrapper}>
                        <Form className={classes.customForm}>
                          {/* <div className={classes.customFormItem}> */}
                          <label for="rating">Your Ratings</label>
                          <Field name="rating">
                            {({ field }) => (
                              <Rating
                                {...field}
                                value={values.rating}
                                onChange={(event, newValue) => {
                                  setFieldValue("rating", newValue);
                                }}
                              />
                            )}
                          </Field>
                          {/* </div> */}
                          <div className={classes.customFormItem}>
                            <label htmlFor="nickname">Your nickname</label>
                            <Field
                              name="nickname"
                              placeholder="Enter your nickname"
                              type="text"
                            />
                            <ErrorMessage
                              name="nickname"
                              component="div"
                              className={styles.form__error}
                            />
                          </div>
                          <div className={classes.customFormItem}>
                            <label htmlFor="review">Comments</label>
                            <Field
                              name="review"
                              placeholder="Enter your feedback"
                              type="text"
                            />
                            <ErrorMessage
                              name="review"
                              component="div"
                              className={styles.form__error}
                            />
                          </div>

                          <button
                            type="submit"
                            className={classes.customFormButton}
                          >
                            Submit Ratings
                          </button>
                        </Form>
                      </div>
                    )}
                  </Formik>
                  <ToastContainer />
                </Grid>
              </TabPanel>
              <TabPanel value="3">Coming soon</TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
      <CourseDescription course={course} />
    </Grid>
  );
};

export default Overview;
