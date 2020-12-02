async function faultyFunction1(){
  console.info("preparing faulty function")
  throw new Error();
  return "donuts";
}

async function doSomethingImportant(){
  try {
    console.log("1.working fine");
    const donuts = await faultyFunction1();
    return donuts;
  } catch (err) {
    return new Promise((res, rej)=>{rej(err)});
  }
}
