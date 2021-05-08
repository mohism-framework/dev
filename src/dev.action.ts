import { ActionBase, ArgvOption, IWithSubCommands } from '@mohism/sloty';
import { Dict } from '@mohism/utils';

class DevAction extends ActionBase {
  options(): Dict<ArgvOption> {
    return {};
  }

  description(): string {
    return '以开发模式运行当前目录，以 npm start 为准';
  }



  async run(options: IWithSubCommands): Promise<void> {
    // start here
    console.log(options);
    this.info('hello');
  }
}

export default new DevAction();