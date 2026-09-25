
function retrieveuser (username) {
    const name = (req,res) => {
        res.send(username);
    }  
    return name;
}

// ¡Exporta la función aquí!
module.exports = { retrieveuser };