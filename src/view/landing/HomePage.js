/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./css/general.css";
// import "./css/queries.css";
import "./css/style.css";
import { Camera, Mic, Search } from "react-feather";
import "./search.css";
import { useState } from "react";
// import Home3 from "./Home3";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";
import { letterList } from "./component";
import { useNavigate } from "react-router-dom";

export default function Home({ display = false }) {
  const [itemName, setItemName] = useState("");
  const navigate = useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const [results,setResults]=useState([])
   const handleSearch =(query)=>{
    setIsLoading(true)
    fetch(`http://localhost:34567/get-drug-byName?drug_name=${query}`
    ).then((resp)=>resp.json()).then((data)=>{
      setResults(data.results)
    })

   }
   const filterBy =()=>true;
  return (
    <>
      {/* {JSON.stringify(itemName)} */}
      <main className="pharmacy">
        {!display && <div className="pharmacy--heading">Online Pharmacy</div>}
        <form className="pharmacy--searchbar">
          <div className="pharmacy--search">
            <div className="pharmacy--searchbar__alignment">
              <div className="search">
                <Search />
              </div>
              <div className="searchbox">
                <div className="searchbox__alignment">
                <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="drug_name"
      minLength={3}
      onSearch={handleSearch}
      options={results}
      placeholder="Search for a Drug..."
      className="searchtext"
      inputProps={{
        // className: "searchtext",
        style: {
          border: "0px",
          outline: "0px",
          fontSize: "16px",
          boxShadow: "none",
          // paddingTop: -30,
        },
      }}
      renderMenuItemChildren={(option: Item) => (
        <>
         
          <span onClick={()=>navigate(`/search?store=${option.drug_name}`)}>{option.drug_name}</span>
        </>
      )}
    />
                </div>
              </div>
              <div className="actions">
                <div className="mic">
                  <Mic style={{ marginBottom: 10 }} />
                </div>
                {/* <div className="upload">
                 <Upload />
                </div> */}
                <div className="camera">
                  <Camera style={{ marginBottom: 10 }} />
                </div>
              </div>
            </div>
          </div>
          {!display && (
            <div className="buttons">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/search?item_name=${itemName}`);
                }}
              >
                Pharm Search
              </button>
              <button>I'm Feeling Lucky</button>
            </div>
          )}
        </form>
      </main>
      {/* <div>
          <Home3 />
        </div> */}
    </>
  );
}
