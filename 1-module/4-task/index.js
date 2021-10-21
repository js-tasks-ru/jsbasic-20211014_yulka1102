function checkSpam(str) {
  let str2 = str.toLowerCase();

  if(str2.includes('1xbet') || str2.includes('xxx')) {
   return true;
  } else {
  return false;
  }
  }
  checkSpam('buy ViAgRA now');
  checkSpam('free xxxxx');
  checkSpam("innocent rabbit");
