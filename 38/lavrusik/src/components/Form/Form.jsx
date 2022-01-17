import { Component } from "react";
import { validationTextName,validationTextEmail,validationTextPass } from "../constants";
import { Input } from "../Input/Input";
export class Form extends Component{
   state = {
      data:{
         name: '',
         email: '',
         password:'',
      },
      errors:{
         name:false,
         email:false,
         password:false,
      }
   };
   handleSubmit = (e) => {
      e.preventDefault();
      const state = this.state;
      const shouldSendData = Object.values(state.errors).every(item => item);
      if (shouldSendData) {
         console.log(state.data);
      }
   }
   handleChange = (e) => {
      const { name: nameInput, value: valueInput } = e.target;
      let error=null;
      if (nameInput==="name") {
         error =  valueInput[0] !== " " && !!valueInput.length && valueInput[0] === valueInput[0].toUpperCase();
      } else if (nameInput==="email") {
         error = valueInput.includes("@");
      } else if (nameInput ==="password") {
         error = valueInput.length >= 8;
      }    
      this.setState((prevState) => ({
         errors: {
            ...prevState.errors,
            [nameInput]: error,
         },
         data: {
            ...prevState.data,
            [nameInput]: valueInput,
         }
      }), () => {
         console.log(this.state);
      });
   };
   render() {
      return (<form name="form" className="form" onSubmit={this.handleSubmit}>
         <Input name="name" placeholder="Enter your name" type="text" handleChange={this.handleChange} errors={this.state.errors} validationText={validationTextName} data={this.state.data} />
         <Input name="email" placeholder="Enter your email" type="text" handleChange={this.handleChange} errors={this.state.errors} validationText={validationTextEmail} data={this.state.data} />
         <Input name="password" type="password" placeholder="Enter your password" handleChange={this.handleChange} errors={this.state.errors}  validationText={validationTextPass} data={this.state.data}/>
         <button>Send</button>
      </form>)
   }
}