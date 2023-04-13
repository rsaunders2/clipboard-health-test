const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate;  
    
    const createCandidate = event => {
        const data = JSON.stringify(event);
        candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }

    const formatCandidate = candidate => {            
        candidate ? candidate = JSON.stringify(candidate) : candidate = TRIVIAL_PARTITION_KEY;
        candidate.length > MAX_PARTITION_KEY_LENGTH ? candidate = crypto.createHash("sha3-512").update(candidate).digest("hex") : '';
    }

    event?.partitionKey ? candidate = event.partitionKey : createCandidate();
    formatCandidate(candidate);

    return candidate;
};