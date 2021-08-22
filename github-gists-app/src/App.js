import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GistCard from "./components/GistCard";
import ApiConsumer from "./utils/ApiConsumer";

function CreatePaginationButtons({ user, page, setPage, setGists }) {
  const goPrev = () => {
    setPage(page - 1);
    ApiConsumer.fetchUsersGists(user, page - 1, setGists);
  };

  const goNext = () => {
    setPage(page + 1);
    ApiConsumer.fetchUsersGists(user, page + 1, setGists);
  };

  if (page === 0) {
    return null;
  } else {
    if (page === 1) {
      return (
        <div style={{ marginBottom: "10px" }}>
          <Button onClick={goNext} variant="contained" color="primary">
            Next 5
          </Button>
        </div>
      );
    } else {
      return (
        <div style={{ marginBottom: "10px" }}>
          <Button onClick={goPrev} variant="contained" color="primary">
            Prev 5
          </Button>
          <Button style={{marginLeft:'10px'}} onClick={goNext} variant="contained" color="primary">
            Next 5
          </Button>
        </div>
      );
    }
  }
}

function App() {
  let [gists, setGists] = useState([]);
  let [user, setUser] = useState("");
  let [tmpUser, setTmpUser] = useState("");
  let [page, setPage] = useState(0);

  return (
    <div class="wrapper">
      <div class="header">
        <TextField
          id="srch"
          label="Username"
          variant="outlined"
          style={{ width: "325px" }}
          onChange={(e) => {
            setTmpUser(e.target.value);
          }}
        />
        <IconButton
          onClick={() => {
            setUser(tmpUser);
            setPage(1);
            ApiConsumer.fetchUsersGists(tmpUser, 1, setGists);
          }}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Search />
        </IconButton>
      </div>
      <div class="content">
        {gists.map((el) => (
          <GistCard data={el}></GistCard>
        ))}
      </div>
      <CreatePaginationButtons
        user={user}
        page={page}
        setPage={setPage}
        setGists={setGists}
      ></CreatePaginationButtons>
    </div>
  );
}

export default App;
