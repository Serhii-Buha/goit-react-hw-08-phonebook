import { Helmet } from 'react-helmet';

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>
      Task manager welcome page
      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default Home;