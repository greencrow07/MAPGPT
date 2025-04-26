import { Handle, Position } from '@xyflow/react';


export default function CustomNode({data}) {
  return (
    <div>
       <button>{data.label}</button>
    </div>    
  );
}
