/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./css/general.css";
// import "./css/queries.css";
import "./css/style.css";
import { Camera, Mic, Search, Upload } from "react-feather";
import "./search.css";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] =useState('')
  return (
    <>
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
                  <input
                    id="search"
                    class="searchtext"
                    type="text"
                    name="search"
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
                    value={search}
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div class="actions">
                <div class="mic">
                  <Mic />
                </div>
                <div class="upload">
                 <Upload />
                </div>
                <div class="camera">
                  <Camera />
                </div>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button type="submit">Pharm Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
        </form>
      </main>
    </>
  );
}
