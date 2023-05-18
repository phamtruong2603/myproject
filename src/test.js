import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

const Teams = () => {
  return (
    <div>
      {/* <h1>Teams</h1>
      <ul>
        <li>
          <Link to="/teams/1">Team 1</Link>
        </li>
        <li>
          <Link to="/teams/2">Team 2</Link>
        </li>
        <li>
          <Link to="/teams/3">Team 3</Link>
        </li>
      </ul> */}
    </div>
  );
};

const TeamDetail = ({ match }) => {
  // const { teamId } = match.params;

  return (
    <div>
      {/* <h2>Team Detail</h2>
      <p>Team ID: {teamId}</p> */}
    </div>
  );
};

const App = () => {
  return (
    // <Routes>
    //   <Route path="/teams" element={<Teams />}>
    //     <Route path=":teamId" element={<TeamDetail />} />
    //   </Route>
    // </Routes>
    <Route path="home" element={<Teams />}>
    <Route path="project/:projectId" element={<Teams />}>
      <Route path=":taskId" element={<TeamDetail />} />
    </Route>
  </Route>
  );
};

export default App;
