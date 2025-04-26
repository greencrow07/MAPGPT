import  {ReactFlow, 
  Background, 
  Controls, 
  ReactFlowProvider, 
  useNodesState } from '@xyflow/react';
import 'reactflow/dist/style.css';
import CustomNode from './cust';

const nodeTypes = {
  button : CustomNode
}
const initialNodes = [
    {
      id: '1',
      type: 'button', // <-- This is our custom node (not built-in)
      position: { x: 250, y: 25 },
      data: { label: 'aaajaaa bhai'},
    },
    {
      id : '2', type : 'button' , position : {x : 30, y : 40}, data : {label : '2nd node'}
    }
  ];

function Try() {


  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={initialNodes}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes} // <-- we’ll create this next
          fitView
        >
          <Background variant="dots" gap={20} size={5} />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default Try;
