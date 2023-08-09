export function TeamsTable() {
  return (
    <form id="teamsForm" action="" method="get">
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
        <tbody></tbody>
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
