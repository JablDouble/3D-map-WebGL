import React, { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
