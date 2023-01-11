import React from "react";

const Card = ({ book }) => {
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        const openInNewTab = (url) => {
          window.open(url, "_blank", "noopener,noreferrer");
        };
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h4 className="title">
                    <b>{item.volumeInfo.title}</b>
                  </h4>
                  <p
                    className="amount"
                    onClick={() =>
                      openInNewTab(`${item.volumeInfo.previewLink}`)
                    }
                  >
                    <b>
                      <s>₹ {amount} </s>&nbsp; Free
                    </b>
                  </p>
                </div>
              </div>
            </>
          );
        } else if (thumbnail !== undefined && amount === undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h4 className="title">
                    <b>{item.volumeInfo.title}</b>
                  </h4>
                  <p
                    className="amount"
                    onClick={() =>
                      openInNewTab(`${item.volumeInfo.previewLink}`)
                    }
                  >
                    <b>
                      <s>₹ 69 </s>&nbsp; Free
                    </b>
                  </p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
