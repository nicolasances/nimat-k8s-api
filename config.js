
class Config {

    load() {

        console.log("Loading configuration...");

        return new Promise((success, failure) => {

            success({});

        });
    }

    getProps() {

        return {
            noAuth: true, 
            noCorrelationId: true
        }
    }
}

exports.config = new Config();