import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-[#fdfdfd] border border-solid border-[#eeecfe] rounded-xl">
          <div className="flex flex-col items-center gap-4 max-w-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#eeecfe]">
              <svg
                className="w-8 h-8 text-[#5d4bff]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h2 className="font-heading-small font-[number:var(--heading-small-font-weight)] text-[#5d4bff] text-[length:var(--heading-small-font-size)] mb-2">
                Something went wrong
              </h2>
              <p className="font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-gray-2 text-[length:var(--paragraph-medium-font-size)]">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#5d4bff] text-white rounded-lg hover:bg-[#4a3ae0] transition-colors"
            >
              <span className="font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[length:var(--caption-medium-font-size)]">
                Refresh Page
              </span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

