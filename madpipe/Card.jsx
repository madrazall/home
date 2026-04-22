import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import StageForm from './StageForm';

const Card = ({ customer, updateCustomers, customers }) => {
  const [showModal, setShowModal] = useState(false);
  const [editStage, setEditStage] = useState('');

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: customer.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleEdit = (stage) => {
    setEditStage(stage);
    setShowModal(true);
  };

  const handleSave = (stage, details) => {
    const updatedCustomers = customers.map(c => {
      if (c.id === customer.id) {
        return {
          ...c,
          stages: { ...c.stages, [stage]: details }
        };
      }
      return c;
    });
    updateCustomers(updatedCustomers);
  };

  return (
    <>
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="card">
        <h3>{customer.name}</h3>
        <p>Current Stage: {customer.currentStage}</p>
        <button onClick={() => handleEdit(customer.currentStage)}>Edit Current Stage</button>
      </div>
      {showModal && (
        <StageForm
          customer={customer}
          stage={editStage}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Card;