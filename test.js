it('1',()=>{
  return Promise.reject(111).catch(data=>{
    expect(data).toBe(111)
  })
})