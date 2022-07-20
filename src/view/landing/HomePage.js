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

export default function Home() {
  const [itemName, setItemName] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {/* {JSON.stringify(itemName)} */}
      <main class="pharmacy">
        <div class="pharmacy--heading">Online Pharmacy</div>
        <form class="pharmacy--searchbar">
          <div class="pharmacy--search">
            <div class="pharmacy--searchbar__alignment">
              <div class="search">
                <Search />
              </div>
              <div class="searchbox">
                <div class="searchbox__alignment">
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
              <div class="actions">
                <div class="mic">
                  <Mic />
                </div>
                {/* <div class="upload">
                 <Upload />
                </div> */}
                <div class="camera">
                  <Camera />
                </div>
              </div>
            </div>
          </div>
          <div class="buttons">
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
        </form>
      </main>
      {/* <div>
          <Home3 />
        </div> */}
    </>
  );
}
