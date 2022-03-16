var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
const CLIENT_ID = '5b819510367a00b88398'
const CLIENT_SECRET = '006e367a6e057f8c75c993841df9436ae183e693'
const GITHUB_URL = "https://github.com/login/oauth/access_token";


router.get('/', (req, res) =>  {

    console.log("redirected")
    // console.log("query code: "+req.query.code);
    // axios( {
    //   method: "POST",
    //   url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    axios.post( `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
          {
              headers: {
                     'accept': 'application/json',
            },
        }).then((response) => {
          // querystring.parse(url);
          var tempStr = response.data.split("&")[0];
          var tempstr2= tempStr.split("=")[1];
          console.log(tempstr2);
          var acccessToken = req.query.acccess_token
          //response = JSON.stringify(response.data)
        console.log("after axios call");
        //console.log(response);
        //console.log("TOKEN: "+response.data.access_token);
      res.redirect(
        `http://localhost:3000?access_token=${tempstr2}`
      );
    });
  });
module.exports = router;