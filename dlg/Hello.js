
exports.do = (req) => {

    return new Promise((success, failure) => {

        let name = req.params.name;

        success({message: "Hello! This is " + name + " speaking!" });
    })
}