const crypto = require('crypto');
const key = 'KXGBE8CB3Y6M07FCRQ2TECLYG320PTXAM7JPENDKKQCJ0WPEJB8OHOSPQ9I16DJY';
const body = '{"webhook_id":"ce58d16a-ea6a-4cfa-b0ac-41c7a5d08d2a","event":"taskUpdated","task_id":"et6ued"}';
const hash = crypto.createHmac('sha256', key).update(body);
const signature = hash.digest('hex');

const ClickUp_Signature = "5bbf9d3be70abb221b0652658827e7a3afd608916fb79b6edfb06121f9dbdb59";

console.log("Josh'ss signature: " + signature);
console.log("ClickUp signature: " + ClickUp_Signature);
