import NavFooter from "../components/NavFooter";
import NavSearch from "../components/NavSearch"
import SubjectWrapperfav from "../components/Subjectfav";


function Favoritos() {
  return (
    <div >
      <NavSearch />

      <body>
        <div className="mt-120">
          <SubjectWrapperfav />
        </div>
      </body>

      <NavFooter />
    </div>

  );
}
export default Favoritos;