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
import GistCard from './components/GistCard';
import ApiConsumer from "./utils/ApiConsumer";



function App() {
  let [gists, setGists] = useState([]);
  let [user,setUser] = useState('');
  let forks = 'Mihai, Ana';

  return (
    <div class="wrapper">
      <div class="header">
        <TextField
          id="srch"
          label="Username"
          variant="outlined"
          style={{ width: "325px" }}
          onChange={(e)=>{console.log(e.target.value);setUser(e.target.value);}}
        />
        <IconButton
          onClick={() => {
            ApiConsumer.fetchUsersGists(user,5,setGists);
          }}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Search />
        </IconButton>
      </div>
      <div class="content">
          {
            gists.map(el => <GistCard data={el}></GistCard>)
          }
      </div>
    </div>
  );
}

export default App;
