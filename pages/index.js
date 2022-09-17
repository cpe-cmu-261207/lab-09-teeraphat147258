import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class="d-sm-flex mx-auto vstack gap-5 p-5 align-items-center">
        <div class="fw-bold">Home page</div>
        <div
          class="hstack gap-5 mx-auto border border-5 rounded-3 d-flex"
          width="500"
          height="500"
        >
          <img
            width="150"
            height="150"
            src="images/LAb1 img1.jpg"
            class="rounded-circle"
          />
          <div class="vstack gap-5 p-3">
            <span class="fw-bold"> Teeraphat Wongsa </span>
            <span class="mx-auto d-sm-flex ">
              Hi! my name is Teeraphat Wongsa. I love in Coding
            </span>
          </div>
        </div>
        <div class="fw-bold">Skill</div>
        <div class="hstack gap-5 d-sm-flex mx-auto">
          <div class="card ">
            <img
              src="images/Coding2607.jpg"
              o
              class="card-img-top"
              width="250"
              height="250"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Coding</h5>
              <p class="card-text text-center">
                Can coding with C++ and python
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="images/BLOG_web-design-1.jpg"
              class="card-img-top"
              width="250"
              height="250"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Website Designing</h5>
              <p class="card-text text-center">
                Can plan and design website page
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="images/unity-game-design.jpg"
              class="card-img-top"
              width="250"
              height="250"
            />
            <div class="card-body">
              <h5 class="card-title text-center">Game Designing</h5>
              <p class="card-text text-center">
                I can have a little game designing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
