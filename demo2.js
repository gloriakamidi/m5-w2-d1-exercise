class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  //N.B.: You cannot have a semicolon " ; " in the state. Only a comma ","
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked: target.value;
      const name = target.name;
      this.setState({[name]: value});
      console.log(this.state.numberOfGuest);
      console.log(this.state.isGoing);
    }
  
    render() {
      return (
        <form>
        <label>Is going:</label>
        <input 
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} 
        />
          <br />
          <label>Number of guests:</label>
          <input 
           name="numberOfGuests"
           type="number"
           value={this.state.numberOfGuests}
           onChange={this.handleInputChange}
          />

        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
  