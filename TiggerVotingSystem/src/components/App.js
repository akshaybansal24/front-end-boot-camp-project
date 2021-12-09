
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import { HelloWorld } from './components/HelloWorld';
import { VoterTool } from './VoterTool';
//import { ColorToolStoreProvider } from '../contexts/colorToolStoreContext';
import { ColorTool } from './ColorTool';
//import { CarToolStoreProvider } from '../contexts/carToolStoreContext';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Layout } from './Layout';

import { Provider } from 'react-redux';
import { voterToolStore } from '../stores/voterToolStore';
import { colorToolStore } from '../stores/colorToolStore';

// import { calcToolStore } from '../stores/calcToolStore';
// import { CalcTool } from './CalcTool';


// //function declaration
// function HelloWorld(){

// }

// //function expression
// const HelloWorld2 = function(){

// };

// const colorList = [
//   {id: 1, name: 'red', hexcode: 'ff0000'},
//   {id: 2, name: 'green', hexcode: '00ff00'},
//   {id: 3, name: 'blue', hexcode: '0000ff'}
// ];

// const carList = [
//   {id: 1, make: 'Lexus', model: 'NX 300', year: 2021, color: 'Atomic Silver', price: 53000, isEditable: false},
//   {id: 2, make: 'Tesla', model: 'Model 3', year: 2021, color: 'Red', price: 72000, isEditable: false}
// ];

export const App = () =>{
    return (
        <Router path="/">
          <Layout>
            <ToolHeader headerText="The Tools" />  
            <nav>
                <ul className="menu">
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/color-tool">Color Tool</Link></li>
                <li className="menu-item"><Link to="/voter-tool">Voter Tool</Link></li>
                <li className="menu-item"><Link to="/calc-tool">Calc Tool</Link></li>
                </ul>
            </nav>
            <main>
                <Route path="/" exact>
                    <h1>Home Page</h1>
                </Route>
                <Route path="/color-tool">
                    <Provider store={colorToolStore}>
                      <ColorTool />
                    </Provider>
                </Route>
                <Route path="/voter-tool">
                  <Provider store={voterToolStore} >
                    <VoterTool />
                  </Provider>
                </Route>
                {/* <Route path="/calc-tool">
                  <Provider store={calcToolStore} >
                    <CalcTool />
                  </Provider>
                </Route> */}
            </main>
            <aside>Sidebar</aside>
            <ToolFooter footerText="A cool compamy" />
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