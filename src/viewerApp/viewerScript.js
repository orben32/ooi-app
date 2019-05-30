import { createAppController } from '../components/app/appController';

export const createControllers = (appControllerConfigs) => {
  return appControllerConfigs.map(config => createAppController(config))
};

const viewerScript = {
  createControllers,
};

export default viewerScript;
