import React from "react";
import "./item-details.css";
import Spinner from '../spinner'


const Record = ({ item, field, label }) => {
  return (
    < tr >
      <td>{label}</td>
      <td>{item[field]}</td>
    </tr >
  )
}

export {
  Record
};




export default class ItemDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      item: null,
      loading: true,
      image: null
    }
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    this.setState({ loading: true })
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })
  }
  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select a person from a list</span>;
    }
    if (this.state.loading) {
      return <div className='spinner'><Spinner /></div>
    }

    const { name } = this.state.item;


    return (
      <div className="person-details jumbotron rounded">
        <div className="person-details_content">
          <img
            className="person-details_img"
            src={image}
          />
        </div>
        <div className="person-details_info">
          <h3>{name}</h3>
          <table className="person-details_characteristic">
            <tbody>
              {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item })
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
