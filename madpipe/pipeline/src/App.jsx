import { useState, useEffect } from 'react';
import Board from './components/Board';
import { loadCustomers, saveCustomers } from './utils/storage';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const data = loadCustomers();
    setCustomers(data);
  }, []);

  const updateCustomers = (newCustomers) => {
    setCustomers(newCustomers);
    saveCustomers(newCustomers);
  };

  const addCustomer = () => {
    const name = prompt('Enter customer name:');
    if (name) {
      const newCustomer = {
        id: Date.now().toString(),
        name,
        currentStage: 'research',
        stages: {
          research: { text: '', attachments: [] },
          initialOutreach: { dateCompleted: '', content: '' },
          returnContact: { scheduling: '', presetQuestions: '', customerTimeline: '', deliverableDate: '' },
          draftSendProposal: { followData: '', signedProposal: '' },
          completeProject: { deadline: '', handoffDate: '' },
          followUp: { reminders: '', googleReview: false, checkIns: '' }
        }
      };
      updateCustomers([...customers, newCustomer]);
    }
  };

  return (
    <div className="app">
      <h1>Customer Pipeline</h1>
      <button onClick={addCustomer} style={{ marginBottom: '20px', padding: '10px' }}>Add Customer</button>
      <Board customers={customers} updateCustomers={updateCustomers} />
    </div>
  );
}

export default App;
