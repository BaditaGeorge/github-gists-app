import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "react-toastify/dist/ReactToastify.css";
import CreateModal from './GistModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    width: 450,
  },
  media: {
    height: 140,
  },
});

function GistCard() {
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
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          natanfudge / crash.txt
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created at 12/02/21
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Tag: txt
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Forks: Ana, Mihai
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button onClick={CreateModal} size="small" color="primary">
          View File
        </Button> */}
        <CreateModal userName='UserName' fileName='fileName' content={dataStr}></CreateModal>
      </CardActions>
    </Card>
  );
}

export default GistCard;
