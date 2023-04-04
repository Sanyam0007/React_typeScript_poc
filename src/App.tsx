import "./App.css";
import { Counter } from "./State/Counter";
import { Loggedin } from "./State/Loggedin";
// import { User } from './State/User';
import { User } from "./components/Context/User";
// import { Button } from './components/Button';
import { Container } from "./components/Container";
import { Person } from "./components/Person";
import { MutableRef } from "./components/Ref/MutableRef";
import { Private } from "./components/Auth/Private";
import { Profile } from "./components/Auth/Profile";
import { List } from "./components/Generics/List";
import { RandomNumber } from "./components/Restrictions/RandomNumbers";
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  const items = ["Batman", "Superman", "Wonder Woman"];

  return (
    <div className="App">
      <List items={items} onClick={(item) => console.log(item)} />
      <List items={[1,2,3]} onClick={(item) => console.log(item)} />
      {/* <Loggedin/> */}
      {/* <Counter/> */}
      {/* <User/> */}
      {/* <MutableRef/> */}
      <RandomNumber value={10} isPositive={true} isNegative={true} isZero={true}/>
      {/* <Private isLoggedIn={true} Component={Profile}/> */}
      {/* <Person name={Myperson}/>
      <Container style={{border:'1px solid black',background:'red'}}/> */}
    </div>
  );
}

const Myperson = {
  name: "Sanyam",
  age: 22,
};
// const myList = [
//   {
//     first:'sam',
//     last:'singh'
//   },
//   {
//     first:'john',
//     last:'kumar'
//   },
//   {
//     first:'messi',
//     last:'sharma'
//   }
// ]

export default App;
