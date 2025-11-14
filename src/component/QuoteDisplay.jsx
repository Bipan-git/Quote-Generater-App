import React from "react";

export default function QuoteDisplayApp({ text, author }) {
  return (
    <div className="quote-box">
      <p className="quote-text">"{text}"</p>
      <p className="quote-author">"{author}"</p>
    </div>
  );
}
