// @flow
import React, { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Description from './components/Description';
import Highlights from './components/Highlights';
import Ending from 'components/Ending';

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('Adding resize event listener');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Removing resize event listener');
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="Home">
      <article>
        <Welcome width={width} />
        <Description width={width} />
        <Highlights />
        <Ending />
      </article>
    </div>
  );
};

export default Home;
