
const axios = require("axios");

async function getApiInfo(id){ 

        pageOne = await axios.get(
          `https://torre.bio/api/bios/${id}`
        );
        console.log(pageOne);
        pageOne = pageOne.data.person;
        console.log(pageOne.publicId);
        // ....................................................
        return pageOne

};
module.exports = getApiInfo;
