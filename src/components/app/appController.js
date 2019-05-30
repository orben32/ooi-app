const gugi = () => {
  debugger;
  console.log('gugi');
};

export async function createAppController({ setProps, config }) {
  return {
    pageReady() {
      setProps(Object.assign({ log: gugi }, config.publicData.COMPONENT));
    },
  };
}
