import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <>
      <SearchBar />
      <MovieGrid />
      <MovieModal />
    </>
  );
};

export default App;
