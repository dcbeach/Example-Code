class MainForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    var formData = {
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      pnumber: event.target.pnumber.value
    };

    fetch("/saveSSF", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <form id="form1" onSubmit={this.handleSubmit}>
          <label htmlFor="fname">First Name: </label>
          <input type="text" id="fname" name="fname" />
          <br />

          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname" name="lname" />
          <br />

          <label htmlFor="pnumber">Phone Number: </label>
          <input type="text" id="pnumber" name="pnumber" />
          <br />

          <button type="submit" form="form1" value="Submit">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const element = <MainForm />;
ReactDOM.render(element, document.getElementById("content"));
