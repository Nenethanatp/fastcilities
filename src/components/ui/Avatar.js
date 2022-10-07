import profileImage from '../../assets/images/profile-image.png';

function Avatar({ src, size, borderSize, borderColor }) {
  const classes = `${borderSize ? ' border border-' + borderSize : ''}${
    borderColor ? ' border-' + borderColor : ''
  } w-64 h-64`;
  return (
    <img
      src={src || profileImage}
      className={` rounded-full cursor-pointer${classes}`}
      alt="user"
    />
  );
}
export default Avatar;
