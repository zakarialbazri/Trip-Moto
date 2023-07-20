import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { responsiveFontSizes } from "@mui/material";
import style from './FAQ.css'

export default function BasicAccordion(props) {
  return (
    <div className="accordion" >
      <h2>
        FAQ
      </h2>
      <Accordion className="accordion__qst" style={{backgroundColor:'rgba(255, 255, 255, 0.7)'}}>
        <AccordionSummary
          
          expandIcon={<ExpandMoreIcon fontSize="large"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className="accordion__title">Question 1</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordion__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion__qst" style={{backgroundColor:'rgba(255, 255, 255, 0.7)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className="accordion__title">Question 2</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordion__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion__qst" style={{backgroundColor:'rgba(255, 255, 255, 0.7)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h3 className="accordion__title">Question 3</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordion__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
