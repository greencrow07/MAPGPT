export const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const getFormattedTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
};