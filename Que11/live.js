const request = require('request-promise');

async function getLiveCricketScores() {
  try {
    const apiKey = '13cf787f-72cd-41ca-9e2f-3d711cb26c6e'; // Replace this with your actual API key
    const apiUrl = `https://cricapi.com/api/matches?apikey=${apiKey}`;

    const response = await request(apiUrl, { json: true });

    if (response.error) {
      throw new Error(response.error);
    }

    const matches = response.matches;
    if (!matches || matches.length === 0) {
      console.log('No live matches found.');
      return;
    }

    console.log('Live Cricket Scores:');
    console.log('---------------------');
    matches.forEach((match) => {
      const { team1, team2, score } = match;
      console.log(`${team1} vs ${team2}: ${score}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getLiveCricketScores();