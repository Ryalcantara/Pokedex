import { Component } from "react";

class Catcher extends Component {
  state = { hasError: false, error: null };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}

export default Catcher;
