import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AddBox } from '@mui/icons-material';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDarkMode } from '../context/DarkModeContext';
import image1 from "../assets/chirag.jpg";
import image2 from "../assets/bharat.jpg";
import image3 from "../assets/ayush.jpg";
import image4 from "../assets/sourav.jpg";
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const { darkMode } = useDarkMode();

  return (
   <>
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center" 
        padding="1rem"
    >
        <h1
         style={{fontSize: "3rem", margin:"1rem"}}
        >🅼🅴🅴🆃 🅾🆄🆁 🆂🆀🆄🅰🅳</h1>
        <Box
            display="flex"
            justifyContent="center"
            alignContent="center"
            gap="1rem"
            flexWrap="wrap"
            padding="1rem"
        >
      {/* <Card sx={{ maxWidth: 345, maxHeight: 650}}style={darkMode ? {backgroundColor:"black", color:"white", border:"1px solid white",borderRadius:"2rem" ,boxShadow:"-0px -0px 20px 0px grey"} : {}}
>
      <CardHeader 
        avatar={
            <Avatar src={image1} sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chirag Rana"
        subheader="Web Designer"
        />
      <CardMedia
        component="img"
        style={{ height: "50%", borderRadius: "10px", objectFit: "cover"}}
        image={image1}
        alt="Chirag Rana"
        />
      <CardContent 
        
      >
        <Typography variant="body2" color="text.secondary" style={darkMode ? {backgroundColor:"black", color:"white"} : {}}>
        Creative web designer adept at crafting visually stunning and user-friendly websites tailored to clients' unique needs. Proficient in translating ideas into captivating digital experiences through intuitive design and seamless functionality.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="flex-end"
          marginTop="1.5rem"
          >
        <a href="https://www.linkedin.com/in/thecodebreaker/" target="_blank">
  <LinkedInIcon style={{ fontSize: "2.5rem" }} />
</a>
        <a href="https://github.com/the-code-breaker">
        <GitHubIcon  style={{fontSize:"2.5rem"}} />
        </a>
        <a href="https://twitter.com/theecodebreaker">
        <XIcon style={{fontSize:"2.5rem"}} />

        </a>
        <a href="https://www.facebook.com/profile.php?id=100011405194529">

        <FacebookIcon style={{fontSize:"2.5rem"}} />
        </a>
        </Box>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, maxHeight: 650}} style={darkMode ? {backgroundColor:"black", color:"white", border:"1px solid white",borderRadius:"2rem" ,boxShadow:"-0px -0px 20px 0px grey"} : {}}>
      <CardHeader
        avatar={
            <Avatar src={image3} sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ayush"
        subheader="Backend Developer"
        />
      <CardMedia
        component="img"
        style={{ height: "50%", borderRadius: "10px", objectFit: "cover"}}
        image={image3}
        alt="Ayush Kumar"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={darkMode ? {backgroundColor:"black", color:"white"} : {}}>
        Experienced backend developer skilled in building robust and scalable systems that power dynamic web applications. Proficient in designing efficient databases, implementing APIs, and optimizing server-side code for optimal performance
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="flex-end"
          marginTop="1.5rem"
          >
        <LinkedInIcon style={{fontSize:"2.5rem"}} />
        <GitHubIcon  style={{fontSize:"2.5rem"}} />
        <XIcon style={{fontSize:"2.5rem"}} />
        <FacebookIcon style={{fontSize:"2.5rem"}} />
        </Box>
        </CardContent>

    </Card>
    <Card sx={{ maxWidth: 345, maxHeight: 650}} style={darkMode ? {backgroundColor:"black", color:"white", border:"1px solid white",borderRadius:"2rem" ,boxShadow:"-0px -0px 20px 0px grey"} : {}}>
      <CardHeader
        avatar={
            <Avatar src={image2} sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bharat Malik"
        subheader="Front End Developer"
        />
      <CardMedia
        component="img"
        style={{ height: "50%", borderRadius: "10px", objectFit: "cover"}}
        image={image2}
        alt="Bharat Malik"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={darkMode ? {backgroundColor:"black", color:"white"} : {}}>
        Talented front end developer with a keen eye for design and a passion for creating engaging user interfaces. Proficient in HTML, CSS, and JavaScript, dedicated to crafting responsive websites that deliver seamless user experiences across devices.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="flex-end"
          marginTop="1.5rem"
          >
        <LinkedInIcon style={{fontSize:"2.5rem"}} />
        <GitHubIcon  style={{fontSize:"2.5rem"}} />
        <XIcon style={{fontSize:"2.5rem"}} />
        <FacebookIcon style={{fontSize:"2.5rem"}} />
        </Box>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345, maxHeight: 650}} style={darkMode ? {backgroundColor:"black", color:"white", border:"1px solid white",borderRadius:"2rem" ,boxShadow:"-0px -0px 20px 0px grey"} : {}}>
      <CardHeader
        avatar={
            <Avatar src={image4} sx={{ bgcolor: red[500] }} aria-label="recipe">
          
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sourav Sharma"
        subheader="Lead Developer"
        />
      <CardMedia
        component="img"
        style={{ height: "50%", borderRadius: "10px", objectFit: "cover"}}
        image={image4}
        alt="Sourav Sharma"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={darkMode ? {backgroundColor:"black", color:"white"} : {}}>
        Seasoned lead developer with a proven track record of guiding teams to successful project delivery through strategic planning and effective collaboration. Skilled in providing technical leadership, mentorship, and overseeing the development lifecycle to ensure high-quality solutions.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="flex-end"
          marginTop="1.5rem"
          >
        <LinkedInIcon style={{fontSize:"2.5rem"}} />
        <GitHubIcon  style={{fontSize:"2.5rem"}} />
        <XIcon style={{fontSize:"2.5rem"}} />
        <FacebookIcon style={{fontSize:"2.5rem"}} />
        </Box>
      </CardContent>
    </Card> */}
    </Box>
    </Box>

   </>
  );
}
