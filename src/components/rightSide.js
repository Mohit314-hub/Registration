
import "./main.css"
const buttonStyle = {
  backgroundColor: "#007BFF", // Change to the desired background color
  color: "white", // Text color
  border: "none",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "5px",
  margin: "5px",
};

export default function RightSide() {
  return (
    <div>
      <div className="r">
        <h1 className="rheading">Create an Account</h1>
      </div>
      <div className="row input">
        <div className="col-md-6 col-sm-12">
          <input type="text" className="form-control mb-3" placeholder="First Name" />
        </div>
        <div className="col-md-6 col-sm-12">
          <input type="text" className="form-control mb-3" placeholder="Last Name" />
        </div>
      </div>
      <div className="row input">
        <div className="col-md-3 col-sm-12">
          <div className="input-group">
            <input type="text" className="form-control"  value="+91" readOnly />
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <input type="text" className="form-control" placeholder="Phone Number" />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Address" />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <div className="input-group">
            <span className="input-group-text">
              <img src="password-icon.png" alt="Password Icon" />
            </span>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <div className="input-group">
            <h2 className="govt-id-heading">Upload Govt ID</h2>
          </div>
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <div className="input-group">
            <input type="file" className="form-control" id="fileInput" />
          </div>
        </div>
      </div>
   
      <div className="row input align-items-center">
      <div className="col-md-3 col-sm-6 col-12">
          <h2 className="reference-heading">Reference</h2>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <button type="button" className="form-control btn btn-primary rounded" style={buttonStyle}>
            <img src="student-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
            Student
          </button>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <button type="button" className="form-control btn btn-primary rounded" style={buttonStyle}>
            <img src="faculty-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
            Faculty
          </button>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <button type="button" className="form-control btn btn-primary rounded" style={buttonStyle}>
            <img src="alumni-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
            Alumni
          </button>
        </div>
      </div>
      <div className="row input">
        <div className="col-md-6 col-sm-12">
          <button type="button" className="form-control btn btn-primary rounded" style={buttonStyle}>
            Already have an account? Login
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <button type="button" className="form-control btn btn-success rounded" style={buttonStyle}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
