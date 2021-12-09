
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Layout } from './Layout';


import { VoterTool } from './VoterTool';
import { ElectionTool } from './ElectionTool';
import { BallotTool } from './BallotTool';


import { Provider } from 'react-redux';
import { voterToolStore } from '../stores/voterToolStore';
import { colorToolStore } from '../stores/colorToolStore';
import { electionToolStore } from "../stores/electionToolStore";


export const App = () =>{
    return (
        <Router path="/">
          <Layout>
              <ToolHeader headerText="Tigger Voting Tool" message="Life is not about how fast you run on how high you climb but how well you bounce" />
              <nav>
                <ul className="menu">
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/voter-tool">Voter Tool</Link></li>
                    <li className="menu-item"><Link to="/election-tool">Election Tool</Link></li>
                    <li className="menu-item"><Link to="/ballot-tool">Ballot Tool</Link></li>
                </ul>
            </nav>
            <main>
                <Route path="/" exact>
                    <h1>Home Page</h1>
                </Route>

                <Route path="/voter-tool">
                  <Provider store={voterToolStore} >
                    <VoterTool />
                  </Provider>
                </Route>
                <Route path="/election-tool">
                    <Provider store={electionToolStore}>
                        <ElectionTool />
                    </Provider>
                </Route>
                <Route path="/ballot-tool">
                    <Provider store={colorToolStore}>
                        <BallotTool />
                    </Provider>
                </Route>
            </main>
            <aside>Sidebar</aside>
            <ToolFooter footerText="Tigger Voting System" />
          </Layout>
        </Router>
      )
}

// export const App = () =>{
//   return (
//       <Router path="/">
//         <Layout>
//           <ToolHeader headerText="The Tools" />  
//           <nav>
//               <ul className="menu">
//               <li className="menu-item"><Link to="/">Home</Link></li>
//               <li className="menu-item"><Link to="/color-tool">Color Tool</Link></li>
//               <li className="menu-item"><Link to="/car-tool">Car Tool</Link></li>
//               </ul>
//           </nav>
//           <main>
//               <Route path="/" exact>
//                   <h1>Home Page</h1>
//               </Route>
//               <Route path="/color-tool">
//                   <ColorToolStoreProvider colors={colorList}>
//                   <ColorTool />
//                   </ColorToolStoreProvider>
//               </Route>
//               <Route path="/car-tool">
//                 <Provider store={carToolStore} >
//                   <CarTool />
//                 </Provider>
//               </Route>
//           </main>
//           <aside>Sidebar</aside>
//           <ToolFooter footerText="A cool compamy" />
//         </Layout>
//       </Router>
//     )
// }
//Another way as seen on instructors code
// render(
//   <>
//       <ColorTool colors={colorList} ></ColorTool>
//       <CarTool cars={carList}></CarTool>
//   </>,
//   document.querySelector('#root'),
// );