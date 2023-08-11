import React from "react";
import { deleteTeamRequest, loadTeamsRequest } from "./middleware";

type Team = {
  id: string;
  promotion: string;
  members: string;
  name: string;
  url: string;
  createdBy?: string;
};

function TeamRow(props: { team: Team }) {
  // const id = team.id;
  // const url = team.url;
  const team: Team = props.team;
  const { id, url } = team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selectAll" value="${id}" />
      </td>
      <td>{team.promotion}</td>
      <td>{team.members}</td>
      <td>{team.name}</td>
      <td>
        <a href="${team.url}" target="_blank">
          {displayUrl}
        </a>
      </td>
      <td>
        <button
          type="button"
          title="Edit"
          className="action-btn edit-btn"
          onClick={() => {
            console.warn("edit", id, team);
          }}
        >
          {" "}
          &#9998;{" "}
        </button>
        <button
          type="button"
          title="Delete"
          className="action-btn delete-btn"
          onClick={async () => {
            console.warn("delete", id, team);
            await deleteTeamRequest(id);
            window.location.reload();
          }}
        >
          {" "}
          ✖{" "}
        </button>
      </td>
    </tr>
  );
}

type Props = {
  loading: boolean;
  teams: Team[];
};

export function TeamsTable(props: Props) {
  console.info("table props", props);

  return (
    <form id="teamsForm" action="" method="get" className={props.loading ? "loading-mask" : ""}>
      <table id="teamsTable">
        <colgroup>
          <col className="select-all-col" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(team => (
            <TeamRow key={team.id} team={team} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" placeholder="Enter Promotion" required />
            </td>
            <td>
              <input type="text" name="members" placeholder="Enter Members" required />
            </td>
            <td>
              <input type="text" name="name" placeholder="Enter Project Name" required />
            </td>
            <td>
              <input type="text" name="url" placeholder="Enter Project URL" required />
            </td>
            <td>
              <button className="action-btn" title="Add" type="submit">
                ➕
              </button>
              <button className="action-btn" title="Cancel" type="reset">
                ❌
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: []
    };
  }

  async componentDidMount() {
    const teams = await loadTeamsRequest();
    this.setState({
      loading: false,
      teams
    });
    console.info(teams);
  }

  render() {
    console.info("render", this.state.loading);
    return <TeamsTable loading={this.state.loading} teams={this.state.teams} />;
  }
}
