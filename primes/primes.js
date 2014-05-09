function findPrimes(){
  var btime = new Date().getTime();
  var nmax = document.getElementById("upto").value;
  var primes = [];
  var nums = new Array;
  for (var i=2;i<=nmax;i++){
    if (!nums[i]){
      primes.push(i);
      for (var j=i*2;j<=nmax;j+=i){
        nums[j] = true;
      }
    }
  }
  var etime = new Date().getTime();
  document.getElementById("firstn").innerHTML = "The primes upto " + nmax.toString() + " are : (took " + (etime-btime).toString() + " ms to calc)";
  document.getElementById("resultd").innerHTML = primes.toString();
  return primes;
}

