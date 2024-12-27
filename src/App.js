import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import './App.css';
import Sidebar from './components/Sidebar';

const initialNodes = [];
const initialEdges = [];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [metadata, setMetadata] = useState({ nodes: [], edges: [] });

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const updateDiagram = (newMetadata) => {
    const newNodes = newMetadata.nodes.map((node) => ({
      id: node.id,
      data: { label: node.label },
      position: node.position,
    }));

    const newEdges = newMetadata.edges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
    }));

    setNodes(newNodes);
    setEdges(newEdges);
    setMetadata(newMetadata);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar updateDiagram={updateDiagram} metadata={metadata} />
      <div style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;