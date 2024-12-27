import React from 'react';
import '../styles/Forms.css';

const NodeForm = ({ formData, setFormData }) => {
  return (
    <div className="form">
      <label>Label</label>
      <input
        type="text"
        value={formData.label || ''}
        onChange={(e) => setFormData({ ...formData, label: e.target.value })}
      />
      <label>Position (x, y)</label>
      <input
        type="number"
        placeholder="x"
        value={formData.position?.x || ''}
        onChange={(e) =>
          setFormData({ ...formData, position: { ...formData.position, x: +e.target.value } })
        }
      />
      <input
        type="number"
        placeholder="y"
        value={formData.position?.y || ''}
        onChange={(e) =>
          setFormData({ ...formData, position: { ...formData.position, y: +e.target.value } })
        }
      />
    </div>
  );
};

export default NodeForm;