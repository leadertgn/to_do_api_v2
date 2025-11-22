const health = (version=1) => (req,res) =>{
    res.status(200).json({
        succes:true,
        message: `Bienvenu sur la version ${version} de l'api. Le service est opérationnel.`,
        status: 'OK'
    });
};

export default health;