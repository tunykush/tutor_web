import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <section class="container mt-5 mb-5">
        <div class="row">
          <div class="col-6">
            <h1>What services we served for you</h1>
          </div>
          <div class="col mt-5">
            <p>Find out more subjects that we can serve you</p>
          </div>
          <div class="col mt-4">
            <button type="button" class="learnmorebtn">
              Learn more
            </button>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-4">
            <img src="/web edited/images/marketing.png" alt="" />
            <h3>Marketing</h3>
            <p>
              Marketing courses teach strategies for influencing customer
              behavior throughout the customer lifecycle.
            </p>
          </div>
          <div class="col-4">
            <img src="/web edited/images/illustration.png" alt="" />
            <h3>Illustration</h3>
            <p>
              For those pursuing professional advancement, skill acquisition, or
              even a new career path, these Illustration courses can be a
              valuable resource.
            </p>
          </div>
          <div class="col-4">
            <img src="/web edited/images/science.png" alt="" />
            <h3>Science</h3>
            <p>
              Learn about anatomy, biochemistry, biology, immunology, genetics,
              neurobiology,and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;