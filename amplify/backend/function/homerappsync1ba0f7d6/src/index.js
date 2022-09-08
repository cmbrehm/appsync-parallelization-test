const util=require('util');
const WAIT=util.promisify(setTimeout);
exports.handler = async (event) => {
    //console.log(`EVENT: ${JSON.stringify(event)}`);
    //const f = event.fieldName;
    await WAIT(2000);
    return [1,2,3].map(n=>{return { id: n, when: new Date(Date.now()) }})
};
