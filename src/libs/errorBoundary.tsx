import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorComponent } from '~/components';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('error: ', error);
    console.error('errorInfo:  ', JSON.stringify(errorInfo));
    console.error('componentStack: ', errorInfo.componentStack);
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorComponent />;
    }

    return children;
  }
}
