import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Card from './Card';

const Column = ({ column, updateCustomers, customers }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="column">
      <h2>{column.title}</h2>
      <div ref={setNodeRef} className="column-content">
        <SortableContext items={column.customers.map(c => c.id)} strategy={verticalListSortingStrategy}>
          {column.customers.map(customer => (
            <Card key={customer.id} customer={customer} updateCustomers={updateCustomers} customers={customers} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default Column;