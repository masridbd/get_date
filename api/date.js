export default function handler(req, res) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-CA', { 
    timeZone: 'Asia/Anadyr', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  }).split('/').reverse().join('-'); // Outputs YYYY-MM-DD, e.g., 2025-08-03
  res.setHeader('Content-Type', 'text/plain');
  res.end(formattedDate);
}
