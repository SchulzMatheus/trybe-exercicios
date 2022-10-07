const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  
  it('uppercase "random" to equal "RANDOM"', (x) => {
    uppercase('RANDOM', (strUpperCase) => { 
       expect(strUpperCase).toBe('RANDOM'); 
       x()
      }
    );
  });