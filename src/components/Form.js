import React from "react";

function Form() {
  return (
    <div>
      <table>
        <tr>
          <td>
            <ol>
              <li>
                <p>
                  Did you work in a state other than California during the last
                  18 months?
                  <br />
                  AND / OR
                  <br />
                  Did you work in Canada during the last 18 months?
                </p>
              </li>
            </ol>
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
              <br />
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
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>
    </div>
  );
}

export default Form;
