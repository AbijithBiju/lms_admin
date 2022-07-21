import Heading from "./components/Heading";
import Table from "./components/Table";

function App() {
  return (
    <div className="w-screen flex p-6 h-screen  bg-slate-300">
      <div className="w-3/5 h-full flex flex-col rounded-md bg-white">
        {/* attendence */}
        <Heading heading="Attendence"/>
        <Table/>
      </div> 
      <div className="w-2/5 flex flex-col px-3 h-full">
        <div className="w-full mb-3 rounded-md bg-white h-1/2">
          {/* power */}
          <Heading heading="Power"/>
        </div>
        <div className="w-full rounded-md bg-white h-1/2">
          {/* file upload */}
          <Heading heading="File upload"/>
        </div>
      </div>
    </div>
  );
}

export default App;
