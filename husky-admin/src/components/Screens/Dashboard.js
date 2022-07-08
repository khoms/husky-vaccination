import React from "react";
// import logo from "../../assets/logo.png";

const Home = (props) => {
  return (
    <div>
      <h1 className="h1-title">Home Screen</h1>

      <section class="home-section">
        <div class="home-content">
          <div class="overview-boxes limit1150">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Users</div>
                <div class="number">40,876</div>
                <div class="indicator">
                  <i class="bi bi-people"></i>
                  <span class="text">Till Date</span>
                </div>
              </div>
              <i class="bi bi-people cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Dogs</div>
                <div class="number">38,876</div>
                <div class="indicator">
                  <i class="bi bi-app"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bi bi-app cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Appointments</div>
                <div class="number">$12,876</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Overall</span>
                </div>
              </div>
              <i class="bi bi-view-list cart three"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Pending Appointments</div>
                <div class="number">11,086</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Not been reviewed</span>
                </div>
              </div>
              <i class="bx bxs-cart-download cart four"></i>
            </div>
          </div>
        </div>
      </section>
      <div />
    </div>
  );
};

export default Home;
