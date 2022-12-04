/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let map={};
    for(email of emails){
       let emailComponent=email.split('@')
       emailComponent[0]=emailComponent[0].replace(/\./g,"");
       emailComponent[0]= emailComponent[0].split('+')[0]
      let correctEmail=emailComponent.join('@');
      if(!map[correctEmail]){
        map[correctEmail]=1;
        
      }else{
          map[correctEmail]++;
      }
         
    }
 return Object.keys(map).length;

    
};