import React from "react";
import Head from "next/head";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBarExampleIcon from "../components/appBar";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import Link from "next/link"

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }
  handleClick = ()=> {
    location.href = '/';
  }
  render() {
    return (
      <MuiThemeProvider>
        <AppBarExampleIcon />
        <Drawer width={200} open={this.state.open}>
          <AppBar title="SINGA " onLeftIconButtonClick={this.handleClick}  style={{ backgroundColor:"rgb(0,62,72)"}}/>
          <Link href="/page1">
          <MenuItem>
            <h3 style={{margin:0}}>Phase One  </h3>
            <div style={{margin:0}}>Ideation</div>  
          </MenuItem>
          </Link>
          <Link href="/page2">
          <MenuItem>
          <h3 style={{margin:0}}>Phase Two  </h3>
            <div style={{margin:0}}>Concept</div>  
          </MenuItem>
          </Link>
          <Link href="/page3">
          <MenuItem>
          <h3 style={{margin:0}}>Phase Three  </h3>
            <div style={{margin:0}}>Excution</div>  
          </MenuItem>
          </Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <div style={{position:0}}> User@gmail.com</div>
          <p style={{fontWeight:10}}> Contact</p>
        </Drawer>
        <div style={{display:"flex", flexWrap:"nowrap"}}>
            <div style={{width:210}}>

            </div>
            <div >
                    <h1>page1</h1>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Index;
