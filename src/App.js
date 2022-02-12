import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';

import DoneIcon from '@mui/icons-material/Done';

import ClearIcon from '@mui/icons-material/Clear';

export default function App() {
  return (
    <div className="total">
      <div className="row">

        <div className="col-lg-4">
          <Content1 />
        </div>

        <div className="col-lg-4">
          <Content2 />
        </div>

        <div className="col-lg-4">
          <Content3 />
        </div>

      </div>
    </div>

  );
}

function Content1() {
  return (
    <Card>
      <CardContent>
        <div className="front">
          <p>Free</p>
          <h1>$0<span>/month</span></h1> <hr />
        </div>

        <div>
          <DoneIcon /> <span>Single User</span>
        </div>
        <div>
          <DoneIcon /> <span>5GB Storage</span>
        </div>
        <div>
          <DoneIcon /> <span>Unlimited Public Projects</span>
        </div>
        <div>
          <DoneIcon /> <span>Community Access</span>
        </div>
        <div className="clear">
          <ClearIcon /> <span>Unlimited Private Projects</span>
        </div>
        <div className="clear">
          <ClearIcon /> <span>Dedicated Phone Support</span>
        </div>
        <div className="clear">
          <ClearIcon /> <span>Free Subdomain</span>
        </div>
        <div className="clear">
          <ClearIcon /> <span>Monthly Status Reports</span>
        </div>

      </CardContent>
      <CardActions>
        <button className="btn">Button</button>
      </CardActions>
    </Card>
  )
}

function Content2() {
  return (
    <Card>
      <CardContent>
        <div className="front">
          <p>Plus</p>
          <h1>$9<span>/month</span></h1> <hr />
        </div>

        <div>
          <DoneIcon /> <span><b>5 Users</b></span>
        </div>
        <div>
          <DoneIcon /> <span>50GB Storage</span>
        </div>
        <div>
          <DoneIcon /> <span>Unlimited Public Projects</span>
        </div>
        <div>
          <DoneIcon /> <span>Community Access</span>
        </div>
        <div>
          <DoneIcon /> <span>Unlimited Private Projects</span>
        </div>
        <div>
          <DoneIcon /> <span>Dedicated Phone Support</span>
        </div>
        <div>
          <DoneIcon /> <span>Free Subdomain</span>
        </div>
        <div className="clear">
          <ClearIcon /> <span>Monthly Status Reports</span>
        </div>

      </CardContent>
      <CardActions>
        <button className="btn">Button</button>
      </CardActions>
    </Card>
  )
}

function Content3() {
  return (
    <Card>
      <CardContent>
        <div className="front">
          <p>Pro</p>
          <h1>$49<span>/month</span></h1> <hr />
        </div>
        <div>
          <DoneIcon /> <span><b>Unlimited Users</b></span>
        </div>
        <div>
          <DoneIcon /> <span>150GB Storage</span>
        </div>
        <div>
          <DoneIcon /> <span>Unlimited Public Projects</span>
        </div>
        <div>
          <DoneIcon /> <span>Community Access</span>
        </div>
        <div>
          <DoneIcon /> <span>Unlimited Private Projects</span>
        </div>
        <div>
          <DoneIcon /> <span>Dedicated Phone Support</span>
        </div>
        <div>
          <DoneIcon /> <span><b>Unlimited</b> Free Subdomain</span>
        </div>
        <div>
          <DoneIcon /> <span>Monthly Status Reports</span>
        </div>
      </CardContent>
      <CardActions>
        <button className="btn">Button</button>
      </CardActions>
    </Card>
  )
}