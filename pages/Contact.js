import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        class="d-sm-flex mx-auto vstack gap-5 p-5 align-items-center  rounded-3 d-flex"
        style={{
          maxwidth: "1200",
          backgroundcolor: "white",
          maxheight: "1200",
        }}
      >
        <div class="fw-bold" style={{ fontsize: "25px" }}>
          My Contact
        </div>
        <div class="vstack gap-5 align-items-center">
          <div class="hstack gap-5 mx-auto " style={{ maxwidth: "600" }}>
            <img
              width="150"
              height="150"
              src="images/LAb1 img1.jpg"
              style={{ objectfit: "cover" }}
              class="rounded-circle"
            />
          </div>
          <div style={{ textalign: "left" }}>
            <table class="p2" style={{ width: "100%", paddingtop: "30" }}>
              <tr>
                <td class="h5">Name</td>
                <td class="p2">Teeraphat Wongsa</td>
              </tr>
              <tr>
                <td class="h5">Nickname</td>
                <td class="p2">Ice</td>
              </tr>
              <tr>
                <td class="h5">Address</td>
                <td class="p2">1/1085 Backwood.st SaintPeterburg</td>
              </tr>
              <tr>
                <td class="h5">Facebook</td>
                <td class="p2">
                  <a
                    href="https://www.facebook.com/teeraphat.wongsa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/teeraphat.wongsa/
                  </a>
                </td>
              </tr>
              <tr>
                <td class="h5">Email</td>
                <td class="p2">
                  <a href="mailto: teeraphat_w@cmu.ac.th">
                    teeraphat_w@cmu.ac.th
                  </a>
                </td>
              </tr>
              <tr>
                <td class="h5">Phone</td>
                <td class="p2">093-231-5797</td>
              </tr>
            </table>
            <div class="vstack gap-1 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
