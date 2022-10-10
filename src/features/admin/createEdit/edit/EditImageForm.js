import React, { useRef, useState } from 'react';
import FacAvatar from '../create/FacAvatar';

function EditImageForm({ input, setInput }) {
  const inputEl = useRef();
  const [file, setFile] = useState(null);

  if (file) {
    input.image = file;
  }
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
      <div className="text-center mt-8 mb-8">
        <span onClick={() => inputEl.current.click()}>
          <FacAvatar src={file ? URL.createObjectURL(file) : input.image} />
        </span>
      </div>
    </>
  );
}

export default EditImageForm;
