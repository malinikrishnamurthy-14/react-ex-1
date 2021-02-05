import React from "react";

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

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: items,
      article: items[0],
      bookAuthor: items[0],
      style: styles,
    };
  }

  onClickAddItem() {
    this.setState({
      ...this.state,
      allItems: [...this.state.allItems, items[0]],
    });
  }

  onClickUpdateTitle() {
    this.setState({
      ...this.state,
      article: { ...this.state.article, title: "Updated title" },
    });
  }

  onClickUpdateAuthor() {
    this.setState({
      ...this.state,
      bookAuthor: {
        ...this.state.bookAuthor,
        authors: [...this.state.bookAuthor.authors, "MALINI"],
      },
    });
  }

  onClickUpdateStyle() {
    //update using useState - nested object

    //add new prop - level1
    // this.setState({
    //   ...this.state,
    //   style: {
    //     ...this.state.style,
    //     font: {
    //       ...this.state.style.font,
    //       opacity: 0.5,
    //     },
    //   },
    // });

    // update prop value - nested level
    // this.setState({
    //   ...this.state,
    //   style: {
    //     ...this.state.style,
    //     font: {
    //       ...this.state.style.font,
    //       size: {
    //         ...this.state.style.font.size,
    //         newunit: "rem",
    //       },
    //     },
    //   },
    // });

    //update more than 1 prop
    this.setState({
      ...this.state,
      style: {
        ...this.state.style,
        font: {
          ...this.state.style.font,
          opacity: 0.5,
          size: { ...this.state.style.font.size, newunit: "rem" },
        },
      },
    });
  }

  render() {
    //de structuring object properties
    const { allItems, article, bookAuthor, style } = this.state;

    // console.log(allItems);
    // console.log(article);
    // console.log(bookAuthor);
    // console.log(style);

    return (
      <div>
        <button onClick={() => this.onClickAddItem()}>Add Item</button>
        <button onClick={() => this.onClickUpdateTitle()}>Update Title</button>
        <button onClick={() => this.onClickUpdateAuthor()}>
          Update Author
        </button>
        <button onClick={() => this.onClickUpdateStyle()}>Update Style</button>

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

        {console.log(style)}
      </div>
    );
  }
}

export default ClassComp;
