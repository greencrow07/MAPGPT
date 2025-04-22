import ReactFlow, { Background, Controls, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import ChatNode from './chatNodetTry';

const nodeTypes = { chat: ChatNode };

const initialNodes = [
  {
    id: '1',
    type: 'chat',
    position: { x: 250, y: 5 },
    data: {},
  },
];

const initialEdges = [];

function FlowCanvas() {
  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}
