const health = (version) => (req,res) =>{
    res.status(200).json({
        message: `Bienvenu sur la version ${version} de l'api. Le service est opérationnel.`,
        status: 'OK'
    });
};

export default health;