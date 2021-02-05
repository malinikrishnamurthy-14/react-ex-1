import React, { useState } from "react";

const items = [
  {
    title: "test",
    desc: "book on testing",
    amount: 500.0,
    review: 4,
    authors: ["jane, dave, bill"],
  },
];

const styles = {
  font: {
    size: {
      value: "22",
      unit: "px",
    },
    weight: "bold",
    color: "#663300",
    family: "arial",
    align: "center",
  },
};

const FuncComp = () => {
  const [allItems, updateAllItems] = useState(items);
  const [article, updateArticle] = useState(items[0]);
  const [bookAuthor, updateBookAuthor] = useState(items[0]);
  const [style, updateStyle] = useState(styles);

  const onClickAddItem = () => {
    updateAllItems([...allItems, items[0]]);
  };

  const onClickUpdateTitle = () => {
    updateArticle({ ...article, title: "Updated title" });
  };

  const onClickUpdateAuthor = () => {
    updateBookAuthor({
      ...bookAuthor,
      authors: [...bookAuthor.authors, "MALINI"],
    });
  };

  const onClickUpdateStyle = () => {
    //update using useState - nested object

    //add new prop - level1
    // updateStyle({ ...style, font: { ...style.font, opacity: 0.5 } });

    // update prop value - nested level
    // updateStyle({
    //   ...style,
    //   font: { ...style.font, size: { ...style.font.size, newunit: "rem" } },
    // });

    //update more than 1 prop
    updateStyle({
      ...style,
      font: {
        ...style.font,
        opacity: 0.5,
        size: { ...style.font.size, newunit: "rem" },
      },
    });
    console.log(style);
  };

  return (
    <div>
      <button onClick={() => onClickAddItem()}>Add Item</button>
      <button onClick={() => onClickUpdateTitle()}>Update Title</button>
      <button onClick={() => onClickUpdateAuthor()}>Update Author</button>
      <button onClick={() => onClickUpdateStyle()}>Update Style</button>

      <h1>Book Information</h1>
      <ol>
        {allItems.map((item, key) => {
          return (
            <li key={key}>
              <h3>
                {item.title} - {item.desc}
              </h3>
              <p>
                {item.amount} - {item.review}
              </p>

              <p>{item.authors}</p>
            </li>
          );
        })}

        <li> {`Book title: ${article.title}`} </li>
        <li> {`Book Author: ${bookAuthor.authors}`}</li>
        <li> {`font size: ${style.font.size.unit}`}</li>
        <li> {`font unit: ${style.font.size.value}`}</li>
        <li> {`font new unit: ${style.font.size.newunit}`}</li>
        <li> {`weight: ${style.font.weight}`}</li>
        <li> {`color: ${style.font.color}`}</li>
        <li> {`family: ${style.font.family}`}</li>
        <li> {`align: ${style.font.align}`}</li>
        <li> {`opacity: ${style.font.opacity}`}</li>
      </ol>
    </div>
  );
};

export default FuncComp;
