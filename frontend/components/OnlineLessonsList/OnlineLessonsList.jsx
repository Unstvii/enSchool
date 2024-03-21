import React from "react";
import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  accordionTitle: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#2D3436",
  },
  accordionDetails: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#696984",
    letterSpacing: "1px",
  },
  customBoll: {
    width: "20px",
    height: "20px",
    borderRadius: "100px",
    background: "#55EFC4",
    marginRight: "16px",
    opacity: 0.5,
  },
});
const OnlineLessonsList = () => {
  const classes = useStyles();
  return (
    <Grid sx={{ width: "90%", margin: "0 auto", paddingBottom: "60px" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#2D3436",
          textAlign: "center",
          margin: "70px 0px 80px 0px",
        }}
      >
        Online coaching lessons for remote learning
      </Typography>
      <Grid>
        <Accordion className={classes.accordionTitle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Grid className={classes.customBoll}></Grid> Lorem ipsum dolor sit
            amet
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
            consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod
            temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionTitle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Grid className={classes.customBoll}></Grid> Consectetur adipiscing
            elit, sed do
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
            consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod
            temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionTitle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Grid className={classes.customBoll}></Grid> Eiusmod tempos Lorem
            ipsum
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
            consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod
            temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionTitle} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Grid className={classes.customBoll}></Grid> Lorem ipsum dolor sit
            amet
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
            consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod
            temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionTitle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Grid className={classes.customBoll}></Grid> Lorem ipsum dolor sit
            amet
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet,
            consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod
            temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default OnlineLessonsList;
