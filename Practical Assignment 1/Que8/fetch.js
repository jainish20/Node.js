
async function fetchDataFromGooglePage() {
    try {
      const fetch = await import('node-fetch');
      const url = 'https://www.google.com'; 
      const response = await fetch.default(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.text();
      console.log(data); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchDataFromGooglePage();
  