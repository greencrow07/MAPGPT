import { Background, 
    Position,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState 
    } from "@xyflow/react";
import React from "react";
import ChatbotUI from "./chatui";

const nodeTypes = {
    ChatBot : ChatbotUI
}

const initialNodes = [
    {
        id : 1, 
        type : 'ChatBot',
        data : {label : 'first node'},
        position : {x:0, y:0}
    }
]
const initialEdges = []

const [nodes, setNodes, onNodesChange] = useNodesState(initialnodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


export default function flowApp(){
    return (
        <ReactFlowProvider>
            <div height = '100vh' width = '100vw'>
                <Reactflow
                 nodes={initialNodes}
                 edges={initialEdges}
                 onNodesChange={onNodesChange}
                 onEdgesChange={onEdgesChange}
                >
                    <Background variant="lines"/>
                </Reactflow>
            </div>
        </ReactFlowProvider>
    )
}