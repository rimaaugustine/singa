import React from "react";
import Head from "next/head";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBarExampleIcon from "../components/appBar";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import Link from "next/link";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }
  handleClick = () => {
    location.href = "/";
  };
  render() {
    return (
      <MuiThemeProvider>
        <AppBarExampleIcon />
        <Drawer width={200} open={this.state.open}>
          <AppBar title="SINGA " onLeftIconButtonClick={this.handleClick}  style={{ backgroundColor:"rgb(0,62,72)"}} />
          <Link href="/page1">
            <MenuItem>
              <h3 style={{ margin: 0 }}>Phase One </h3>
              <div style={{ margin: 0 }}>Ideation</div>
            </MenuItem>
          </Link>
          <Link href="/page2">
            <MenuItem>
              <h3 style={{ margin: 0 }}>Phase Two </h3>
              <div style={{ margin: 0 }}>Concept</div>
            </MenuItem>
          </Link>
          <Link href="/page3">
            <MenuItem>
              <h3 style={{ margin: 0 }}>Phase Three </h3>
              <div style={{ margin: 0 }}>Excution</div>
            </MenuItem>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style={{ position: 0 }}> User@gmail.com</div>
          <p style={{ fontWeight: 10 }}> Contact</p>
        </Drawer>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <div style={{ width: 410 }} />
          <div>
            <Card>
              <CardHeader
                title="Concept Phase"
                subtitle="In progress"
                titleStyle={{fontSize:25}}

              />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
                <br/>
                <div style={{display:"flex", alignItems:"flex-start", flexWrap:"nowrap", marginTop:10}}>
                  <div style={{width:"40%"}} >
                  <FloatingActionButton />
                  <p>Customer Research</p>
                  </div>
                  <div style={{width:"40%"}}>
                  <FloatingActionButton  disabled={true}/>
                  <p>Assumption Prototype</p>
                  </div>
                  <div style={{width:"40%"}}>
                  <FloatingActionButton  disabled={true}/>
                  <p>Business Plan</p>
                  </div>
                </div>
                <hr/>

                <h3>Customer Research</h3> 
                <p style={{color:"red"}}>In Progress</p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.

                <h3>Exercises</h3>
                  <div style={{display:"flex", flexDirection:"column", margin:5}}>
                  <div> 
                    <div style={{display:"flex"}}>
                    <div>
                  <FloatingActionButton mini={true} disabled={true} style={{margin:5}} />
                  </div>
                  <div style={{marginTop:14}}>Customer Research</div>  
                  <div style={{marginLeft:200}}>
                  <RaisedButton label="Exercise" backgroundColor="rgb(255,80,1)"/>
                  </div>
                  </div>
                 
                  </div>
                  <div> 
                    <div style={{display:"flex"}}>
                    <div>
                  <FloatingActionButton mini={true} disabled={true} style={{margin:5}} />
                  </div>
                  <div style={{marginTop:14}}>Synthesis: Persona</div>
                  <div style={{marginLeft:200}}>
                  <RaisedButton label="Exercise" backgroundColor="rgb(255,80,1)" />
                  </div>
                  </div>
                  
                  </div>
                  <div> 
                    <div style={{display:"flex"}}>
                    <div>
                  <FloatingActionButton mini={true} disabled={true} style={{margin:5}} />
                  </div>
                  <div style={{marginTop:14}}>Synthesis: Customer Journey</div>
                  <div style={{marginLeft:145}}>
                  <RaisedButton label="Exercise" backgroundColor="rgb(255,80,1)" />
                  </div>
                  </div>
                  </div>
                 </div>

                <hr/>
                <h3>Most critical assumption and prototype </h3> 
                <p>Not yet started</p>
              </CardText>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Index;
