const axios = require('axios')

async function getApiSkills(id){ 

    pageOne = await axios.get(
      `https://torre.bio/api/bios/${id}`
    );
    console.log(pageOne);
    pageOne = pageOne.data.strengths;
    console.log(pageOne.publicId);
    // ....................................................
    return pageOne

};

module.exports = getApiSkills;