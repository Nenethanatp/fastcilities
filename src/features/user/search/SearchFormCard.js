function SearchFormCard(props) {
  const { facName, facType, logo } = props.facType;
  const { selectType, type } = props;

  let clickStyle = '';
  if (type === facType) {
    clickStyle = 'border-green-600 border-2';
  }
  return (
    <>
      <button
        type="button"
        className={`max-w-sm bg-white rounded-lg border shadow-md h-64 w-64 flex-row ${clickStyle}
        
        `}
        name={facType}
        onClick={() => {
          selectType(facType);
        }}
      >
        <div className="flex flex-col items-center pb-10">
          <i className={logo}></i>
          <h5 className="mb-1 text-xl font-medium text-gray-900">{facName}</h5>
        </div>
      </button>
    </>
  );
}

export default SearchFormCard;
