import logo from './logo.svg';
import './App.css';
import ChartSection from './components/ChartSection';
import SelectorSection from './components/SelectorSection';

function App() {
  return (
    <div class="container">
      <div class="row justify-content-md-center g-5 m-4">
        <div class="col-12">
          <SelectorSection/>
        </div>
      </div>

      <div class="row justify-content-md-center g-3 p-2">
        <div class="col">
          <ChartSection/>
        </div>
      </div>
    </div>
  );
}

export default App;
