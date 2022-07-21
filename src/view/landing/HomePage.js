/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./css/general.css";
// import "./css/queries.css";
import "./css/style.css";
import { Camera, Mic, Search } from "react-feather";
import "./search.css";
import { useState } from "react";
// import Home3 from "./Home3";
import { Typeahead } from "react-bootstrap-typeahead";
import { letterList } from "./component";
import { useNavigate } from "react-router-dom";

export default function Home({ display = false }) {
  const [itemName, setItemName] = useState("");
  const navigate = useNavigate();

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
                  <Typeahead
                    id="basic-typeahead-single"
                    labelKey="itemName"
                    onInputChange={(e) => {
                      if (e.length) {
                        setItemName(e[0].itemName);
                      }
                    }}
                    onChange={(e) => {
                      if (e.length) {
                        setItemName(e[0].itemName);
                        navigate(`/search?item_name=${e[0].itemName}`);
                      }
                      //  navigate(`/home/re`sult?item_name=${search[0].itemName}`)
                    }}
                    options={letterList}
                    placeholder="Search here..."
                    className="searchtext"
                    maxlength="2048"
                    aria-autocomplete="both"
                    aria-haspopup="false"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    autofocus=""
                    role="combobox"
                    spellcheck="false"
                    title="Search"
                    aria-label="Search"
                    inputProps={{
                      className: "searchtext",
                      style: {
                        border: "0px",
                        outline: "0px",
                        fontSize: "16px",
                        boxShadow: "none",
                        // paddingTop: -30,
                      },
                    }}
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
