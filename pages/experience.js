import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class="d-sm-flex mx-auto vstack gap-5 p-5 align-items-center">
        <div class="fw-bold">My Experience</div>
        <div style={{ maxwidth: 2000 }}>
          <div class="vstack gap-5">
            <div class="hstack gap-5  d-sm-flex mx-auto">
              <div class="card " style={{ width: "18rem" }}>
                <img
                  src="images/exp 1.jpg"
                  class="card-img-top"
                  width="250"
                  height="250"
                />
                <div class="card-body align-items-center">
                  <h5 class="card-title text-center">First Project</h5>
                  <p class="card-text text-center ">
                    My first project in computer engineering is a game made from
                    Scratch.
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="images/sudoku.jpg"
                  class="card-img-top"
                  width="250"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title text-center mx-auto">Sudoku</h5>
                  <p class="card-text text-center mx-auto">
                    My second project is a simple sudoku game made from C++ and
                    UI program.
                  </p>
                </div>
              </div>
            </div>
            <div class="hstack gap-5">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="images/851px-Qt_logo_2013.svg.png"
                  class="card-img-top"
                  width="250"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title text-center">UI</h5>
                  <p class="card-text text-center d-sm-flex mx-auto">
                    Once I use QT creater program for making UI.
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="images/Com eng.jpg"
                  class="card-img-top"
                  width="250"
                  height="250"
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Studying</h5>
                  <p class="card-text text-center">
                    Now I'm study in computer engineering in CMU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
