
export default function getDate(input: Date | string) {
    const date = typeof input === 'string' ? new Date(input) : input;
    
    return date.toLocaleDateString('en', { dateStyle: 'medium' });
  }