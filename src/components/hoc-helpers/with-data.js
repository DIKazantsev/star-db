import React from "react";
import Spinner from '../spinner'


const withData = (View) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                itemList: null
            }
        }

        componentDidMount() {
            this.props.getData()
                .then((itemList) => {
                    this.setState({
                        itemList
                    })
                })
        }

        render() {
            const { itemList } = this.state;

            if (!itemList) {
                return <Spinner />
            }
            return (
                <View {...this.props} itemList={itemList} />

            )
        }
    }
}
export default withData;