// getData() fait un appel au backend
function getData() {
    return [
      'my-dns.com',
      'GET',
      8080,
      [1, 2]
    ]
  }
  
  const [ dns, method, port, data ] = getData()
  
  // <=> 
  
  /*const dns = result[0]
  const method = result[1]
  const port = result[2]
  const data = result[3]*/
  
  console.log(dns, method, port, data);