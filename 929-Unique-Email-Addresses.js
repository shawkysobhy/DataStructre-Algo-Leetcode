/**
 * @param {string[]} emails
 * @return {number}
 */
 /**
 email => localName @ domain
 email => if + or . add to local name it mean that same if they have not 
 email=> rule no2 not applied with domain name
 + =>everything after the first plus sign will be ignored

 testemail@leetcode.com","testemail@leetcode.com","testemail@lee.tcode.com
  */
const localNameHandler=(name)=>{
    let newName=""
   for(let i=0;i<name.length;i++){
    if(name[i]===".")continue;
    if(name[i]==="+")break;
    newName=newName+name[i];
} 
return newName
}

var numUniqueEmails = function(emails) {
    let differentEmails=0;
    let map=new Map();
    emails.forEach(email=>{
        let emailParts=email.split('@')
        let localName=localNameHandler(emailParts[0])
        let handledEmail=[localName,emailParts[1]].join('@')
        if(!map.has(handledEmail)){
            map.set(handledEmail,handledEmail)
            differentEmails=differentEmails+1

        }

    })
    return differentEmails;
};