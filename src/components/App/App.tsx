import './App.module.css';

interface AppProps {
  props?: string;
}

const App = ({ props }: AppProps) => {
  return <>{props}</>;
};

export default App;
