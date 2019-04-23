export async function createAppController({ setProps, config }) {
  console.log(config);
  return {
    pageReady() {
      setProps({
        name: 'Orb',
      });
    },
  };
}
