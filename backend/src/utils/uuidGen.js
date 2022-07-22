const { v4: uuidv4 } = require('uuid');

const uuid = function (){
    let newuuid = uuidv4()
    return newuuid
}

module.exports = uuid;