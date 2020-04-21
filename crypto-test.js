const crypto = require('crypto');
const key = '9MWJWQWTAPGFX1FABCUI0EMLHHOCJAR093AB6T9HZOEHQALNZCW7OMGWR7Q8E6JC';
const body = '{"event":"taskUpdated","history_items":[{"id":"1862511927020777411","type":1,"date":"1586810501420","field":"status","parent_id":"53400032","data":{"status_type":"closed"},"source":null,"user":{"id":300528,"username":"Josh Kim","email":"jk@clickup.com","color":"#08c7e0","initials":"JK","profilePicture":"https://dev-attachments-public.clickup.com/profilePictures/300528_HHk.jpg"},"before":{"status":"to do","color":"#d3d3d3","orderindex":0,"type":"open"},"after":{"status":"complete","color":"#6bc950","orderindex":1,"type":"closed"}}],"task_id":"h5k8z7","webhook_id":"aa7a404c-1162-4114-8383-f0926ae6c644"}';
const hash = crypto.createHmac('sha256', key).update(body);
const signature = hash.digest('hex');

const ClickUp_Signature = "5ee2f861b3aa888bfe906ce790670ee229b9d6ae877b47473a47dff9df903c64";

console.log("Josh'ss signature: " + signature);
console.log("ClickUp signature: " + ClickUp_Signature);
