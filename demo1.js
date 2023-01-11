class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      //binding handles
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
      
      
    }
    
    // add handleChange here : To handle data as you type
    handleChange = (e) => {
      this.setState({value: e.target.value});
      console.log(this.state.value)
    }
    
    // add handleSubmit here
    handleSubmit = (e)  => {
      alert('A name was submitted: ' + this.state.value);
      e.preventDefault(); // Prevents browser window tab opens 
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );