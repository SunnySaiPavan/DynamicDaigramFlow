import React, { useState } from 'react';
import NodeForm from './NodeForm';
import EdgeForm from './EdgeForm';
import '../styles/Sidebar.css';

const Sidebar = ({ updateDiagram, metadata }) => {
  const [formType, setFormType] = useState('node');
  const [formData, setFormData] = useState({});

  const handleAdd = () => {
    const updatedMetadata = { ...metadata };
    if (formType === 'node') {
      updatedMetadata.nodes.push({ ...formData, id: `node-${Date.now()}` });
    } else {
      updatedMetadata.edges.push({ ...formData, id: `edge-${Date.now()}` });
    }
    updateDiagram(updatedMetadata);
    setFormData({});
  };

  return (
    <div className="sidebar">
      <h2>Diagram Editor</h2>
      <div className="form-toggle">
        <button onClick={() => setFormType('node')}>Node</button>
        <button onClick={() => setFormType('edge')}>Edge</button>
      </div>
      {formType === 'node' ? (
        <NodeForm formData={formData} setFormData={setFormData} />
      ) : (
        <EdgeForm formData={formData} setFormData={setFormData} />
      )}
      <button className="add-btn" onClick={handleAdd}>
        Add {formType}
      </button>
    </div>
  );
};

export default Sidebar;