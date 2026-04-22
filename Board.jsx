import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Column from './Column';
import { STAGES, STAGE_LABELS } from '../data/initialData';

const Board = ({ customers, updateCustomers }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const customerId = active.id;
    const newStage = over.id;

    const updatedCustomers = customers.map(customer => {
      if (customer.id === customerId) {
        return { ...customer, currentStage: newStage };
      }
      return customer;
    });

    updateCustomers(updatedCustomers);
  };

  const columns = STAGES.map(stage => ({
    id: stage,
    title: STAGE_LABELS[stage],
    customers: customers.filter(c => c.currentStage === stage)
  }));

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="board">
        {columns.map(column => (
          <Column key={column.id} column={column} updateCustomers={updateCustomers} customers={customers} />
        ))}
      </div>
    </DndContext>
  );
};

export default Board;