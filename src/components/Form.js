import React from "react";

function Form() {
  return (
    <div>
      <table className="form-text">
        <tr>
          <td>
            <p>
              <ol>
                <li>
                  1. Did you work in a state other than California during the
                  last 18 months?
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;AND / OR
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;Did you work in Canada during the last 18
                  months?
                </li>
              </ol>
            </p>
          </td>
          <td>
            <span>
              <input
                type="checkbox"
                id="work-state1"
                name="work-state1"
                value="Yes"
              />
              <label for="work-state1">Yes</label>
              &nbsp;&nbsp;
              <input
                type="checkbox"
                id="work-state2"
                name="work-state2"
                value="No"
              />
              <label for="work-state2">No</label>
              &nbsp;&nbsp;&nbsp;
              <p>If yes, check the applicable box(es) below:</p>{" "}
            </span>
            <br />
            <span>
              <input type="checkbox" id="state" name="state" value="State" />
              <label for="state">State(s)</label>&nbsp;
              <label for="state"> Outside California, specify state(s):</label>
              <input type="text" id="fname" name="fname" />
              <br />{" "}
            </span>
            <br />
            <input type="checkbox" id="canada" name="canada" value="Canada" />
            <label for="state">Canada</label>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <ol>
                <li>
                  2. What is your Social Security number as given to you by the
                  <br /> &nbsp;&nbsp;&nbsp; Social Security Administration?
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp; a) If the EDD assigned you an EDD Client
                  Number
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ECN), please
                  provide the ECN here. (An ECN is a
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9-digit number beginning
                  with 999 or 990.)
                </li>
              </ol>
            </p>
          </td>
          <td>
            <span>
              1.
              <input
                type="checkbox"
                id="work-state1"
                name="work-state1"
                value="Yes"
              />
              <label for="work-state1">Yes</label>
              <br />
              <input
                type="checkbox"
                id="work-state2"
                name="work-state2"
                value="No"
              />
              <label for="work-state2">No</label>
              &nbsp;
              <p>If yes, check the applicable box(es) below:</p>{" "}
            </span>
            <br />
            <span>
              <input type="checkbox" id="state" name="state" value="State" />
              <label for="state">State(s)</label>
              <label for="state"> Outside California, specify state(s):</label>
              <input type="text" id="fname" name="fname" />
              <br />{" "}
            </span>
            <br />
            <input type="checkbox" id="canada" name="canada" value="Canada" />
            <label for="state">Canada</label>
            <br />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Form;
