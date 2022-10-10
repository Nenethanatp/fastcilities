import noImage from '../../../assets/images/noImage1.png';
function FacAvatar({ src, size, borderSize, borderColor }) {
  const classes = `${borderSize ? ' border border-' + borderSize : ''}${
    borderColor ? ' border-' + borderColor : ''
  } w-64 h-64`;
  return (
    <img
      src={src || noImage}
      className={`object-cover rounded-full cursor-pointer${classes}`}
      alt="user"
    />
  );
}
export default FacAvatar;
