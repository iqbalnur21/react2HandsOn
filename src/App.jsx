import { useState } from "react";
import Button from "./component/Button";
import PersonalInfo from "./component/PersonalInfo";
import Sidebar from "./component/Sidebar";
import Card from "./component/Card";

const App = () => {
  const [age, setAge] = useState(23);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState([
    {
      title: "title One",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "title Two",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "title Three",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "title Four",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }
  ]);
  const handlerSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <Button handlerSidebar={handlerSidebar} />
      {showSidebar && <Sidebar />}
      <PersonalInfo age={age} showSidebar={showSidebar} />
      {data.map((item) => (
        <Card title={item.title} description={item.description} setData={setData}/>
      ))}
    </div>
  );
};

export default App;
