
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FqBFBRJ5oyrpMjfvJxFE/scores';

const postScores = async(formData) => {
    
        await fetch(apiUrl, {
            method: 'POST', 
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
                user: formData.user,
                score: formData.score
            }),
        });
      
    }
    
    const getScores = async () => {
        const request = await fetch(apiUrl);
        const data = await request.json();
        console.log(data.result)
        return data.result
    }
    

export {postScores, getScores};