import { Component } from 'react';

class BodyClass extends Component {
  componentDidMount() {
    const { className } = this.props;
    document.body.classList.add(className);
  }

  componentWillUnmount() {
    const { className } = this.props;
    document.body.classList.remove(className);
  }

  render() {
    return null; 
  }
}

export default BodyClass;
