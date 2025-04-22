import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import axios from 'axios';

export default function ChatNode() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json'
        }
      });

      setResponse(res.data.choices[0].message.content);
    } catch (err) {
      setResponse('Error');
    }
  };

  return (
    <div style={{ padding: 10, border: '1px solid black', borderRadius: 10, width: 300, background: 'white' }}>
      <Handle type="target" position={Position.Top} />
      <textarea
        rows={3}
        placeholder="Ask a question..."
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <button onClick={sendMessage}>Send</button>
      <div style={{ marginTop: 8, whiteSpace: 'pre-wrap' }}>{response}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
