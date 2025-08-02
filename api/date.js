export default function handler(req, res) {
  const today = new Date();
  const date = today.toLocaleDateString('en-CA', { 
    timeZone: 'Asia/Dhaka', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  }).split('/').reverse().join('-'); // Outputs YYYY-MM-DD, e.g., 2025-08-03
  const time = today.toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Dhaka', 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  }).toLowerCase(); // Outputs e.g., 4:38 am
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${date}\n${time}`);
}
