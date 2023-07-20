  useEffect(() => {
    const header = new Headers();
    header.append('x-api-key', 'OVLcX2/3XpWrpr1fR1+FqA==HqgZvSKqav5X8B74');
    setisLoading(true);
    fetch('https://api.api-ninjas.com/v1/quotes?category=', {
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
  }, []);

  if (isLoading) return <h1 className="is-loading-msg utils">Loading....</h1>;
  if (errorMessage) {
    return <h1 className="is-error-msg utils">{errorMessage}</h1>;
  }
  return (
    <article className="quote-container">
      <p className="quote">{quoteData?.quote}</p>
      <p className="quote-author">{quoteData?.author}</p>
      <button type="submit" className="quote-suffler">
        .
      </button>
    </article>
  );
}
