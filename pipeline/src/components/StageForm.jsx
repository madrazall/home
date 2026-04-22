import { useState } from 'react';
import { STAGE_DETAILS_SCHEMA } from '../data/initialData';

const StageForm = ({ customer, stage, onSave, onClose }) => {
  const [details, setDetails] = useState(customer.stages[stage] || STAGE_DETAILS_SCHEMA[stage]);

  const handleChange = (field, value) => {
    setDetails({ ...details, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(stage, details);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit {stage}</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(details).map(field => (
            <div key={field}>
              <label>{field}:</label>
              {field === 'googleReview' ? (
                <input
                  type="checkbox"
                  checked={details[field]}
                  onChange={(e) => handleChange(field, e.target.checked)}
                />
              ) : (
                <input
                  type={field.includes('Date') ? 'date' : 'text'}
                  value={details[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              )}
            </div>
          ))}
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default StageForm;
