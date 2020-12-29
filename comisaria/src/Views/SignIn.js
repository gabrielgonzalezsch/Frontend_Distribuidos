import React,{ useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import rut from 'chilean-rut'
import validator from 'email-validator'
import carab from '../Image/carab.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Usach
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function submit(run,nombre,direccion,motivo,email){
  var form ={
      run: run,
      nombre: nombre,
      direccion: direccion,
      motivo: motivo,
      email: email
  }
  axios.post('/createPermiso',form).then(res => {
      alert(res.data.message);
      console.log(res.data)
  })
  .catch(function (error) {
  if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
  }
  });
}


function validationTexfields(run,nombre,direccion,motivo,email){
  if(!rut.validate(run)){
    alert('Rut invalido');
  }else if(!validator.validate(email)){
    alert('Email invalido');
  }else{
    submit(run,nombre,direccion,motivo,email);
  }
}


export default function SignIn() {
  const classes = useStyles();

  useEffect(() => axios.get('/permisos').then(res=>console.log(res.data.rows)));
 
  const [run, setRun] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [motivo, setMotivo] = useState('');
  const [email, setEmail] = useState('');


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt='Carablogo' src={carab} variant="rounded" className={classes.large}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Comisaria Virtual
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="run"
            label="Run"
            name="run"
            autoComplete="run"
            autoFocus
            onChange={(event)=>setRun(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoComplete="nombre"
            autoFocus
            onChange={(event)=>setNombre(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="direccion"
            label="Direccion"
            name="direccion"
            autoComplete="direccion"
            autoFocus
            onChange={(event)=>setDireccion(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="motivo"
            label="Motivo"
            name="motivo"
            autoComplete="motivo"
            autoFocus
            onChange={(event)=>setMotivo(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event)=>setEmail(event.target.value)}
          />
          <Button
            type="btn"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>validationTexfields(run,nombre,direccion,motivo,email)}
          >
              Solicitar
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}