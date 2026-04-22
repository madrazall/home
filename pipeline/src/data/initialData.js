// src/data/initialData.js

export const STAGES = [
  'research',
  'initialOutreach',
  'returnContact',
  'draftSendProposal',
  'completeProject',
  'followUp'
];

export const STAGE_LABELS = {
  research: 'Research',
  initialOutreach: 'Initial Outreach',
  returnContact: 'Return Contact',
  draftSendProposal: 'Draft & Send Proposal',
  completeProject: 'Complete Project',
  followUp: 'Follow-up'
};

export const STAGE_DETAILS_SCHEMA = {
  research: {
    text: '',
    attachments: [] // array of file paths or URLs
  },
  initialOutreach: {
    dateCompleted: '',
    content: '' // copy of what was sent or transcript
  },
  returnContact: {
    scheduling: '', // date or notes
    presetQuestions: '',
    customerTimeline: '',
    deliverableDate: ''
  },
  draftSendProposal: {
    followData: '', // auto from previous?
    signedProposal: '' // file path
  },
  completeProject: {
    deadline: '',
    handoffDate: ''
  },
  followUp: {
    reminders: '',
    googleReview: false,
    checkIns: ''
  }
};

export const initialCustomers = [
  // Sample customer
  {
    id: '1',
    name: 'Sample Customer',
    currentStage: 'research',
    stages: {
      research: { text: 'Initial research notes...', attachments: [] },
      initialOutreach: { dateCompleted: '', content: '' },
      returnContact: { scheduling: '', presetQuestions: '', customerTimeline: '', deliverableDate: '' },
      draftSendProposal: { followData: '', signedProposal: '' },
      completeProject: { deadline: '', handoffDate: '' },
      followUp: { reminders: '', googleReview: false, checkIns: '' }
    }
  }
];
