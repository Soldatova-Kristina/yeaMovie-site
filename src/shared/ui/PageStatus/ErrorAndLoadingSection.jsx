import { LoadingBlock, ErrorBlock } from "./index";

export function ErrorAndLoadingSection({ loading, error, children }) {
  if (loading) return <LoadingBlock />;
  if (error)   return <ErrorBlock message={error.message} />;
  return children;
}