import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useModal } from '../../../../contexts/ModalContext';
import EditImageForm from './EditImageForm';
import * as facApi from '../../../../api/facApi';
import { validateNewFac } from '../../../../validations/validateNewFac';
import { useFacContext } from '../../../../contexts/FacContext';
function EditForm({ fac }) {
  const { closeFormModal } = useModal();
  const { setAllFacs } = useFacContext();
  const {
    id,
    type,
    name,
    location,
    capacity,
    durationLimit,
    openingDay,
    openTime,
    closeTime,
    image,
    status,
  } = fac;

  const [input, setInput] = useState({
    type,
    name,
    location,
    capacity,
    durationLimit,
    openingDay,
    openTime,
    closeTime,
    image,
    status,
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (!input.capacity) {
        input.capacity = 0;
      }
      console.log(input);
      const { error } = validateNewFac(input);
      if (error) {
        return toast.error(error.message);
      }
      // if (input.image === '') {
      //   return toast.error('Require facility photo');
      // }
      const formData = new FormData();
      Object.keys(input).forEach((key) => {
        formData.append(key, input[key]);
      });
      const res = await facApi.updateFac(id, formData);
      console.log(res.data.allFacs);
      setAllFacs(res.data.allFacs);
      toast.success('Success edit facility');
      closeFormModal();
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className=" w-full">
      <hr />
      <div className="flex flex-col items-center ">
        <EditImageForm input={input} setInput={setInput} />
      </div>
      <div className="flex flex-col items-center">
        <form className=" w-5/6 ">
          <div class="mb-3 flex flex-col ">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="type"
            >
              Type
            </label>
            <select
              id="type"
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              value={input.type}
              onChange={handleChangeInput}
            >
              <option hidden></option>
              <option value="room">Meeting Room </option>
              <option value="badminton">Badminton Court </option>
              <option value="basketball"> Basketball Court</option>
            </select>
          </div>
          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              value={input.name}
              onChange={handleChangeInput}
            />
          </div>
          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              value={input.location}
              onChange={handleChangeInput}
            />
          </div>
          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="capacity"
            >
              Capacity
            </label>
            <input
              id="capacity"
              name="capacity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              value={input.capacity}
              onChange={handleChangeInput}
            />
          </div>
          <div class="mb-3 flex flex-col ">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="type"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              value={input.status}
              onChange={handleChangeInput}
            >
              <option hidden></option>
              <option value="open">Open</option>
              <option value="close">Close</option>
            </select>
          </div>

          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="durationLimit"
            >
              Duration Limit
            </label>
            <input
              name="durationLimit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              onChange={handleChangeInput}
              value={input.durationLimit}
            />
          </div>
          <div class="mb-3">
            <label
              class="block text-gray-700 text-sm font-bold mb-1 ml-2"
              htmlFor="openingDay"
            >
              Opening Day
            </label>
            <input
              name="openingDay"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder={'ex. Mon-Fri'}
              value={input.openingDay}
              onChange={handleChangeInput}
            />
          </div>
          <div class="mb-3">
            <div className="mb-3 flex justify-between gap-2">
              <div className=" w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-1 ml-2"
                  htmlFor="openTime"
                >
                  Open Time
                </label>
                <input
                  id="openTime"
                  name="openTime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="ex. 12:00"
                  onChange={handleChangeInput}
                  value={input.openTime}
                />
              </div>
              <div className=" w-full">
                <label
                  class="block text-gray-700 text-sm font-bold mb-1 ml-2"
                  htmlFor="closeTime"
                >
                  Close Time
                </label>
                <input
                  id="closeTime"
                  name="closeTime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="ex. 20:00"
                  onChange={handleChangeInput}
                  value={input.closeTime}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button
              type="button"
              className={`text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
              onClick={closeFormModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`text-white bg-greenSky hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;