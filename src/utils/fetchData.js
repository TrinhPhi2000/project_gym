
export const  exerciseOptions = { 
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'f11a0458a5mshd63b57b0e329924p1b838ejsn9f0df4a7c28a'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async(url, options) => {
    const reponse = await fetch(url, options);
    const data = await reponse.json();
    return data;
}