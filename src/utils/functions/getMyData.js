
const { Experience } = require("../../db.js");


async function getMyData(publicId){ 


    if(!publicId){ // ..... ..... 
       
        const powerade = await Experience.findAll();
          return powerade

    }else{

      const withPowerade = await Experience.findAll({
            where: {
              publicId: publicId,
            },
          });
        // ....................................................
          return withPowerade
        // ....................................................
    }
};
module.exports = getMyData;