import React, { useState } from "react";

const EndClassModal = ({ isOpen, onClose, onEndClass }) => {
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEndClass();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex  justify-center  items-center ">
      <div className="bg-white pl-16 pr-4 py-4 ml-2 rounded-lg shadow-xl mb-10 w-1/3">
        <div
          onClick={onClose}
          className="text-gray-500 text-xl text-right cursor-pointer mb-3 hover:text-gray-700 "
        >
          X
        </div>
        <h2 className="text-2xl font-bold mb-4 ">
          Select a reason to end class
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 cursor-pointer">
            <input
              type="checkbox"
              name="reason"
              value="Class completed"
              
              onChange={(e) => setReason(e.target.value)}
              className="mr-2 accent-custom-orange checkbox rounded-circle "
            />
            Class completed
          </label>
          <label className="block mb-2 cursor-pointer">
            <input
              type="checkbox"
              name="reason"
              value="Class interrupted/aborted"
              checked={reason === "Class interrupted/aborted"}
              onChange={(e) => setReason(e.target.value)}
              className="mr-2 accent-custom-orange"
            />
            Class interrupted/aborted
          </label>
          {reason === "Class interrupted/aborted" && (
            <div className="ml-6 mb-4">
              <label className="block">
                <input type="checkbox" className="mr-2 mb-4 accent-custom-orange" />
                Student didn't show up for the class.
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2 mb-4 accent-custom-orange" />
                Student didn’t show any interest.
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2 mb-4 accent-custom-orange" />
                Student got disconnected.
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2 mb-4 accent-custom-orange" />I
                got disconnected.
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  name="reason"
                  value="Other reason"
                  checked={reason === "Other reason"}
                  onChange={(e) => setReason(e.target.value)}
                  className="mr-2 mb-4 accent-custom-orange"
                />
                Other reason
              </label>
              {reason === "Other reason" && (
                <textarea
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  placeholder="Enter your reason"
                  className="mt-2 mb-4 p-2 border border-gray-300 rounded w-full"
                  aria-label="Other reason"
                />
              )}
            </div>
          )}
          <div className="flex justify-start space-x-4 mb-10 mt-5 ">
            <button
              type="submit"
              className="px-4 py-2 bg-custom-orange text-white rounded hover:bg-orange-500"
            >
              End Class
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EndClassModal;

// Next steps:

// 1. Make these checkboxed rounded
// 2. Make Application responsive
// 3. Work posts page 
// 4. Review the code and make it more readable
