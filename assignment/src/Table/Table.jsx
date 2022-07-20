import "./Table.css";
const Table = props => {
  return (
    <table className="table my-table table-responsive">
      <thead className="thead-dark">
        <tr>
          {props.tableHeaders.map((header, index) => (
            <th scope="col" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.tableData.length ? (
          props.tableData.map((data, index) => (
            <tr key={index}>
              <td key={"d" + index}>{index + 1}</td>
              <td key={"dn" + index}>{data.name}</td>
              <td key={"de" + index}>{data.education}</td>
              <td key={"dh" + index}>{data.hobbies.toString()}</td>
              <td key={"dg" + index}>{data.gender}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="empty-data" colSpan={props.tableHeaders.length}>
              ---Data Not Available---
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Table;
