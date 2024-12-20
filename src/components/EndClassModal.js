import React, { useState } from 'react';

const EndClassModal = ({ isOpen, onClose, onEndClass }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("End class reason:", reason);
    onEndClass();  
    onClose();  
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <h2 className="text-lg font-bold mb-4">Select a reason to end class</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <input
              type="radio"
              name="reason"
              value="Class completed"
              checked={reason === 'Class completed'}
              onChange={(e) => setReason(e.target.value)}
              className="mr-2"
            />
            Class completed
          </label>
          <label className="block mb-4">
            <input
              type="radio"
              name="reason"
              value="Class interrupted/aborted"
              checked={reason === 'Class interrupted/aborted'}
              onChange={(e) => setReason(e.target.value)}
              className="mr-2"
            />
            Class interrupted/aborted
          </label>
          <div className="flex justify-end space-x-4">
            <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">End Class</button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EndClassModal;
