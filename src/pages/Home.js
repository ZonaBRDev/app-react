import NavFooter from "../components/NavFooter";
import NavSearch from "../components/NavSearch"
import Subject from "../components/Subject";


function Home() {
  return (
    <div  >
      <NavSearch /> 

        <div className="mt-120">
          <Subject />
        </div>


      <NavFooter />
    </div>

  );
}
export default Home;