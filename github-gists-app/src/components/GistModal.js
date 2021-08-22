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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IconButton from "@material-ui/core/IconButton";
import FileCopy from "@material-ui/icons/FileCopy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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
    height: "500px",
    width: "700px",
    display: "flex",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    flex: "wrap",
    flexDirection: "row",
  }
}));

function GistModal(props) {
  const classes = useModalStyles();
  const [open, setOpen] = useState(false);
  let [btnColor, setBtnColor] = useState("primary");
  let [checked, setChecked] = useState(true);
  const notify = () => toast("Copied to clipboard!");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button onClick={handleOpen} size="small" color="primary">
        View File
      </Button> */}
      <ListItem onClick={handleOpen} button divider>
        <ListItemText
          primary={props.fileName}
          secondary={"tag:" + props.tag}
        ></ListItemText>
      </ListItem>
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
            <div className={classes.top}>
              <h3>
                {props.userName}/{props.fileName}
              </h3>
              <CopyToClipboard text={props.content}>
                <IconButton
                  onClick={notify}
                  color={btnColor}
                  aria-label="upload picture"
                  component="span"
                  style={{ width: "30px", marginLeft: "20px" }}
                >
                  <FileCopy></FileCopy>
                </IconButton>
              </CopyToClipboard>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    color="primary"
                  />
                }
                label="Show Line Number"
              />
              <ToastContainer autoClose={1500}></ToastContainer>
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={dark}
              showLineNumbers={checked}
            >
              {props.content}
            </SyntaxHighlighter>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default GistModal;
