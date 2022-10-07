import React, { useRef, useState } from 'react';
import Avatar from '../../../components/ui/Avatar';
import { useAuthContext } from '../../../contexts/AuthContext';
// import { FaUpload } from 'react-icons/fa';

function ProfileImageForm({ updated }) {
  const { user } = useAuthContext();
  const [file, setFile] = useState(null);
  const inputEl = useRef();

  if (file) {
    updated.image = file;
  }
  // console.log(updated);
  // console.log(user.image);
  return (
    <>
      <div className="flex justify-content-between items-center">
        <input
          type="file"
          className="hidden"
          ref={inputEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="text-center mt-3">
        <span onClick={() => inputEl.current.click()}>
          <Avatar src={file ? URL.createObjectURL(file) : user.image} />
        </span>
      </div>
    </>
  );
}

export default ProfileImageForm;
