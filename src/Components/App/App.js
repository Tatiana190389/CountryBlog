import './App.css';
import About from '../About/About';
import FeedbackGroup from '../FeedbackGroup/FeedbackGroup';
import ChatSection from '../ChatSection/ChatSection';

function App() {
  return (
    <main>
      <div className="container">
        <About />
        <FeedbackGroup />
        <ChatSection />
      </div>
    </main>
  );
}

export default App;
