import { Box, Typography } from "@mui/material";
import React from "react";
import AllCard from "./AllCard/AllCard";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
const AllInOne = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 17,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: 700,
            color: "#2F327D",
          }}
        >
          All-In-One <span style={{ color: "#00CBB8" }}> Cloud Software.</span>
        </Typography>
        <span
          style={{
            maxWidth: "800px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 400,
            color: "#696984",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </span>
      </Box>
      <Box
        sx={{
          display: "flex",

          width: "80%",
          margin: "0 auto",
          mt: 18,
          gap: 10,
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AllCard
          title="Online Billing, Invoicing, & Contracts
          "
          paragraph="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
          icon={FilePresentIcon}
          iconBackground="#5B72EE"
        />
        <AllCard
          title="Easy Scheduling & Attendance Tracking"
          paragraph="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          icon={CalendarMonthIcon}
          iconBackground="#00CBB8"
        />
        <AllCard
          title="Customer Tracking"
          paragraph="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
          icon={GroupsIcon}
          iconBackground="#29B9E7"
        />
      </Box>
    </Box>
  );
};

export default AllInOne;
