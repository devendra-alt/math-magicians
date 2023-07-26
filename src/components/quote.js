import { useEffect, useState } from 'react';
import Header from './header';

const header = new Headers();
header.append('x-api-key', 'OVLcX2/3XpWrpr1fR1+FqA==HqgZvSKqav5X8B74');
const URL = 'https://api.api-ninjas.com/v1/quotes';

export default function Quote() {
  const [quoteData, setQuote] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlefetchApi = () => {
    const controller = new AbortController();
    const { signal } = controller;
    setisLoading(true);
    fetch(URL, {
      signal,
      method: 'GET',
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        setisLoading(false);
        setQuote(data[0]);
      })
      .catch((e) => {
        setisLoading(false);
        setErrorMessage(`error fetching data ${e}`);
      });
    return () => {
      controller.abort();
    };
  };

  useEffect(() => handlefetchApi(), []);

  if (isLoading) {
    return (
      <>
        <Header />
        <h1 className="is-loading-msg utils" aria-label="loading-msg">
          Loading....
        </h1>
      </>
    );
  }
  if (errorMessage) {
    return (
      <>
        <Header />
        <h1 className="is-error-msg utils">{errorMessage}</h1>
      </>
    );
  }
  return (
    <>
      <Header />
      <article className="quote-container">
        <p className="quote" aria-label="quote">
          {quoteData?.quote}
        </p>
        <p className="quote-author">{quoteData?.author}</p>
        <button
          type="submit"
          className="quote-suffler"
          onClick={handlefetchApi}
        >
          <span className="quote-suffler-tooltip">reload</span>
        </button>
      </article>
    </>
  );
}
