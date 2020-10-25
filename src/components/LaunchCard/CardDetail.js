import React from "react";
import "./css/card.css";

function CardDetail({ data }) {
  console.log(data.rocket.first_stage.cores);
  return (
    <div className="card-item">
      <div className="card-container">
        <div className="box">
          <div className="image">
            <img
              className="avatar"
              src={data.links.mission_patch_small}
              alt="not available"
            />
          </div>
        </div>
        <div className="name">{data.mission_name}</div>
        <div className="content">
          <div className="content-row">
            <div className="label">Mission Ids</div>

            {data?.mission_id?.length > 0 &&
              data.mission_id.map((item, index) => {
                return (
                  <ul>
                    <li key={index}>{item}</li>
                  </ul>
                );
              })}
          </div>

          <table className="content-row">
            <tr>
              <td className="label"> Launch Year :</td>
              <td>
                <span>{data.launch_year}</span>
              </td>
            </tr>

            <tr>
              <td className="label"> Successful Launch:</td>
              <td>
                <span>{data.launch_success ? "true" : "false"}</span>
              </td>
            </tr>
            <tr>
              <td className="label"> Successful Landing :</td>
              <td>
                <span>
                  {!data?.rocket?.first_stage?.cores[0]?.land_success
                    ? "No"
                    : "Yes"}
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
