import './App.css';
import { User } from './User';


function App() {
  const planets = [
    {name:"a",flag:false},
    {name:"b",flag:true},
    {name:"c",flag:false},
    {name:"d",flag:true},
  ]
  return (
   <div className="App">
      {
        planets.map((value,key)=>{
          return(
            <div>
                 {value.flag==true?value.name:"not a planet"}
            </div>
          );
        })
      }
     
   </div>
  );
}

// function App() {
//       const names = ["abc","def","ghi"];
//       const names2 = [
//         {name:"jkl", age:22},
//         {name:"lmn", age:29},
//       ]
//       return (
//        <div className="App">
      
//           {
//             names2.map((name,key)=>{
//               return <h1 key={key}>{name.name} {name.age}</h1>
//             })
//           }
//        </div>
//       );
//     }
    

// function App() {
//   const age = 18;
//   const isGreen = false;

//     return (
//       <div className="App">

//         {age >= 18 ? <h1>Over age</h1>:<h1>Under Age </h1>}
//         <h1 style={{color:isGreen?"green":"red"}}>This is color</h1>
//         {isGreen && <button>This is button</button>}
//       </div>
//     );
//   }
  


//  ---------------------------------------------
// function App() {
//   return (
//     <div className="App">
//       <User name="kaab" age={21} />
//       <User name="muaj" age={6} />
//     </div>
//   );
// }



export default App;
