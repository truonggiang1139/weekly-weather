import emptyState from "../../../assets/empty-state.svg";
type EmptyStateProps = {
  isError: boolean;
};
export function EmptyState(props: EmptyStateProps) {
  const { isError } = props;
  return (
    <div className="max-w-2xl h-[300px] mx-auto mt-5 border border-gray-300 rounded-lg shadow-sm ">
      {isError ? (
        <div>
          <img src={emptyState} className="m-auto" alt="React logo" />
          <div>We could not find weather information for the location above</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
