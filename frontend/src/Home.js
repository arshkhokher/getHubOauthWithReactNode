import {Button as Button1} from "react-bootstrap";
//import CardDeck from "react-bootstrap/CardDeck";
//import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button ,Avatar, Link} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DataTable from './DataTable'

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [gists, setGists] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      "access_token"
    );

    axios
      .get("https://api.github.com/user", {
        headers: {
          Authorization: "token " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log("error " + error);
      });



axios.get("https://api.github.com/gists", {
        headers: {
          Authorization: "token " + token,

        },
      })
      .then((res) => {
        console.log("Gists List");
        console.log(res.data);
        setGists(res.data);
       
      })
      .catch((error) => {
        console.log("error " + error);
      });


      axios
      .get("https://api.github.com/user/repos", {
        headers: {
          Authorization: "token " + token,

        },
      })
      .then((res) => {
        console.log("Repo List");
        console.log(res.data);
        setRepo(res.data);
       
      })
      .catch((error) => {
        console.log("error " + error);
      });

      
  }, []);

  return (
     
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Avatar alt="GIT HUB LOGO" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
          </Typography>

         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Customized Git Hub 
          </Typography>
         
          
          {loggedIn ?(
            <>
            <Avatar alt={user.login} src = {user.avatar_url} />
            <Button color="inherit" onClick={()=>{}}>{<Link color="inherit" href={"/"}>LOGOUT</Link>}</Button>
           </>
           )
          :
          null}
        </Toolbar>
      </AppBar>
    {loggedIn ? (
      <Box>
          <Typography variant="h5" component="div" align="center" sx={{ flexGrow: 1 }}>
              Welcome {" "+user.login}! 
            </Typography>

          <DataTable repo={repo} gist = {gists}>
            {repo}
          </DataTable>
      </Box>
      )
      :

        <><div align="center">
          <img
            className="mb-4"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="150"
          ></img>
          <h1 className="h3 mb-3 font-weight-normal">Sign in with GitHub</h1>
          <Button1
            type="primary"
            className="btn"
            size="lg"
            href="https://github.com/login/oauth/authorize?client_id=5b819510367a00b88398&redirect_uri=http://localhost:3001/oauth/redirect"
          >
            Sign in
          </Button1>
          </div>
        </>
}

  </Box>
)
}
    


        
     
    
  

export default Home;