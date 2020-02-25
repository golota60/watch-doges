import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles.scss';

const App = () => {
  const [imgData, setImgData] = useState({
    imgURL: '',
    endpoint: 'api/shibes',
  });

  useEffect(() => {
    fetchData('api/shibes');
  }, [])

  const setImgUrl = async (url) => {
    await setImgData({
      imgURL: '',
      endpoint: url,
    });
    fetchData(url);
  };

  const fetchData = async (fetchUrl) => {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/${fetchUrl}`);
    setImgData({
      imgURL: await data.json(),
    });
  };

  return (
    <div className="App">
      <div>
        <button
          className="generic-button pink"
          onClick={() => setImgUrl('api/shibes')}>
          I WANT SHIBE!
        </button>
        <button
          className="generic-button pink"
          onClick={() => setImgUrl('api/cats')}>
          I WANT CATE!
        </button>
      </div>
      {imgData.imgURL ? <img src={imgData.imgURL} alt="a dog" className="_image"></img> : <div className="loader"></div>}
    </div>
  );
}

export default App;
