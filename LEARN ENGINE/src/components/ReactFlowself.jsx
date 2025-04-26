import  {ReactFlow, 
    Background, 
    Controls, 
    ReactFlowProvider, 
    useNodesState } from '@xyflow/react';
  import 'reactflow/dist/style.css';
  import CustomNode from './cust';
import { useCallback } from 'react';
  
const nodeTypes = {
  button : CustomNode
}
const initialNodes = [
    {
      id: '1',
      type: 'button', // <-- This is our custom node (not built-in)
      position: { x: 250, y: 25 },
      data: { label: id,
        onAddNode : addNode
      },
    },
  ];

  const addNode = useCallback((data) => {

  },[])


function flowApp(){


    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);


return (
        <ReactFlowProvider>
           <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow
                 nodes={initialNodes}
                 nodeTypes = {nodeTypes}
                 onNodesChange={onNodesChange}
                 fitView
                >
                    <Background variant="dots" gap={20} size ={5}/>
                    <Controls/>
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    )
}
export default flowApp;