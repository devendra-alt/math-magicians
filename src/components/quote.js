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
