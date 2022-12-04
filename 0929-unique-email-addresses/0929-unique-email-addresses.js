/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let map={};
    for(let i=0;i<emails.length;i++){
       let emailComponent=emails[i].split('@')
       emailComponent[0]=emailComponent[0].replace(/\./g,"");
       emailComponent[0]= emailComponent[0].split('+')[0]
      let email=emailComponent.join('@');
      if(!map[email]){
        map[email]=1;
        
      }else{
          map[email]++;
      }
         
    }
 return Object.keys(map).length;

    
};