import { books } from './constants/mockData'

function App() {
  return (
    <>
      <h1></h1>
      {
        books.map(x => {
          return (
            <p>{x.title}</p>
          )
        })
      }
    </>
  );
}
export default App;
