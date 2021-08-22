import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { CopyBlock, dracula } from "react-code-blocks";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    width: 450,
  },
  media: {
    height: 140,
  },
});

const useModalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function CreateModal() {
  const classes = useModalStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} size="small" color="primary">
        View File
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CopyBlock
              language="javascript"
              text={`let a = 10;
console.log(a);`}
              codeBlock
              theme={dracula}
              wrapLines={true}
              showLineNumbers={true}
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

function GistCard() {
  const classes = useStyles();
  //   let modalPart = CreateModal();

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
        <CreateModal></CreateModal>
      </CardActions>
    </Card>
  );
}

export default GistCard;
