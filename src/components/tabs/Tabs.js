import React, { useState } from "react";
import "./Tabs.scss";

function Tabs() {
  const [tablet, setTablet] = useState(1);

  return (
    <>
      <div class="parent tabs">
        <div class="container tabs-cont">
          <div class="tab">
            <div
              class={`btn ${tablet === 1 ? "active" : ""}`}
              onClick={() => setTablet(1)}
              style={{ width: "fit-content" }}
            >
              Tab 1
            </div>
            <div
              class={`btn ${tablet === 2 ? "active" : ""}`}
              onClick={() => setTablet(2)}
              style={{ width: "fit-content" }}
            >
              Tab 2
            </div>
            <div
              class={`btn ${tablet === 3 ? "active" : ""}`}
              onClick={() => setTablet(3)}
              style={{ width: "fit-content" }}
            >
              Tab 3
            </div>
          </div>

          {tablet === 1 && (
            <div class="des ">
              tab1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Autem dolores aperiam dicta? Optio officia eaque fuga pariatur
              obcaecati adipisci eius distinctio doloribus. Voluptatibus sint
              nulla iure recusandae molestias earum magnam.
            </div>
          )}

          {tablet === 2 && (
            <div class="des">
              tab2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Autem dolores aperiam dicta? Optio officia eaque fuga pariatur
              obcaecati adipisci eius distinctio doloribus. Voluptatibus sint
              nulla iure recusandae molestias earum magnam.
            </div>
          )}

          {tablet === 3 && (
            <div class="des">
              tab3 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Autem dolores aperiam dicta? Optio officia eaque fuga pariatur
              obcaecati adipisci eius distinctio doloribus. Voluptatibus sint
              nulla iure recusandae molestias earum magnam.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Tabs;
