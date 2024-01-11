import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import NewsItem from "./NewsItem/NewsItem";

const useStyles: any = makeStyles({
  newsTitle: {
    fontWeight: 500,
    color: "#252641",
  },
  newsLine: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#696984",
    letterSpacing: "1px",
  },
  newsButton: {
    width: "130px",
    padding: "5px 8px 5px 8px",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "1px",
    color: "#FFFFFF",
    background: "#49BBBD",
    borderRadius: "100px",
    marginTop: "20px",
  },
});

const LatestNews = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{ width: "80%", margin: "0 auto", marginTop: 20, marginBottom: 15 }}
    >
      <Grid item xs={12} sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "36px", fontWeight: 700, color: "#2F327D" }}
        >
          Latest News and Resources
        </Typography>
        <Typography
          sx={{ fontSize: "24px", fontWeight: 400, color: "#696984" }}
        >
          See the developments that have occurred to TOTC in the world
        </Typography>
      </Grid>
      <Grid container>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          xs={6}
        >
          <Image
            src="/images/latest-news-laptop.png"
            alt="Latest image"
            width={0}
            height={0}
            sizes="vw"
            style={{ width: "85%", height: "auto", maxWidth: "640px" }}
          />
          <Button variant="contained" className={classes.newsButton}>
            News
          </Button>
          <Typography className={classes.newsTitle} sx={{ fontSize: "26px" }}>
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </Typography>
          <Typography className={classes.newsLine}>
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </Typography>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "1px",
              color: "#696984",
              borderBottom: "1px solid #696984",
              width: "111px",
              marginTop: "8px",
            }}
          >
            Read more
          </span>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "column", gap: "50px" }}
          xs={6}
        >
          <NewsItem
            title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
            line="Class Technologies Inc., the company that created Class,..."
            buttonText="PRESS RELEASE"
            image="/images/latest-new-child.png"
          />
          <NewsItem
            title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
            line="Class Technologies Inc., the company that created Class,..."
            buttonText="NEWS"
            image="/images/news-meeting.png"
          />
          <NewsItem
            title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
            line="Class Technologies Inc., the company that created Class,..."
            buttonText="NEWS"
            image="/images/news-cat.png"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LatestNews;
