import React from 'react';
import '../styles/Forms.css';

const EdgeForm = ({ formData, setFormData }) => {
  return (
    <div className="form">
      <label>Source Node</label>
      <input
        type="text"
        value={formData.source || ''}
        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
      />
      <label>Target Node</label>
      <input
        type="text"
        value={formData.target || ''}
        onChange={(e) => setFormData({ ...formData, target: e.target.value })}
      />
    </div>
  );
};

export default EdgeForm;