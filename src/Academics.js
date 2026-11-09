const modules = [
  ["BT1101", "Introduction to Business Analytics"],
  ["BT2101", "Econometrics Modelling for Business Analytics"],
  ["BT2102", "Data Management and Visualisation"],
  ["BT2103", "Optimization Methods in Business Analytics"],
];

function Academics() {
  return (
    <div>
      <h1>Academics</h1>
      <h2>Modules taught at NUS</h2>
      <table>
        <thead>
          <tr>
            <th>Module Code</th>
            <th>Module Title</th>
          </tr>
        </thead>
        <tbody>
          {modules.map(([code, title]) => (
            <tr key={code}>
              <td>{code}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Academics;
