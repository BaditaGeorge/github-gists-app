import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "react-toastify/dist/ReactToastify.css";
import CreateModal from "./GistModal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    width: 450,
  },
  media: {
    height: 140,
  },
  lst: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  accord: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function GistCard(props) {
  const classes = useStyles();
  //   let modalPart = CreateModal();
  let dataStr = `let a = 10;
    console.log(a);
    let a = 10;let a = 10;let a = 10;let a = 10;let a = 10;let a = 10;let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);
    let a = 10;
    console.log(a);`;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Owner: {props.data.userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created at {props.data.createdAt}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created at {props.data.updatedAt}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Forks: {props.data.forks.length === 0 ? "None" : props.data.forks}
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Files</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List component="nav" className={classes.lst}>
                <Divider />
                {props.data.files.map((fileData) => (
                  <CreateModal
                    userName={props.data.userName}
                    fileName={fileData.fileName}
                    tag={fileData.tag}
                    content={dataStr}
                  ></CreateModal>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
          {/* <List component="nav" className={classes.lst}>
            <Divider />
            {props.data.files.map((fileData) => (
              <CreateModal
                userName={props.data.userName}
                fileName={fileData.fileName}
                tag={fileData.tag}
                content={dataStr}
              ></CreateModal>
            ))}
          </List> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default GistCard;
