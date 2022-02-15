import React, { Component } from 'react'
import './form.css'
 class Form extends Component {
     constructor(){
         super();
         this.state={
             name:"",
             bref:"",
             contact: null,
             user:[]
         }
     }

     managestate=(e)=>{
         this.setState({[e.target.name]:e.target.value});
     }   
     manageSubmit=(e)=>{
        e.preventDefault()
        const tempObj={
            name:this.state.name,
            bref:this.state.bref,
            contact:this.state.contact
        }
        let temparr=this.state.user;
        temparr.push(tempObj);
        this.setState({user:temparr})
     }

  render() {
    return (
      <div className='employee'>
           <div className="heading">EMPLOYEE FEEDBACK FORM</div>
          <form>
              <label className='title' >Name</label>
              <input type="text" name='name' id='name' className='Border' onChange={(e)=>this.managestate(e)} value={this.state.name}  />
              <br></br>
              
              <label className='title'>Department</label>
              <input type="text" name='bref' id='bref' className='Border'  onChange={(e)=>this.managestate(e)} value={this.state.bref}  />
              <br></br>

              <label className='title'>Rank</label>
              <input type="number" name='contact' id='contact' className='Border' onChange={(e)=>this.managestate(e)} value={this.state.contact}  />
              <br></br>
        
              <button  className='button'  onClick={(event)=>this.manageSubmit(event)}>Submit</button>
          
          </form>
          
         <div className="Display">
         {this.state.user.map((val,index)=>{
              return(
                  <div className='record' key={index}>
                    <h2>  {val.name} |  {val.bref}   |  {val.contact} </h2> 
                  </div>
              )
          })}
         </div>
      </div>
    )
  }
}
export default Form