import { ActionBase, ArgvOption } from '@mohism/sloty';
import { Dict } from '@mohism/utils';
import { existsSync } from 'fs';

class DevAction extends ActionBase {
  options(): Dict<ArgvOption> {
    return {};
  }

  description(): string {
    return '以开发模式运行当前目录，以 npm start 为准';
  }

  loadPkg() {
    const pkgPath = `${this.instance.root}/package.json`;
    if (!existsSync(pkgPath)) {
      this.fatal(`NOT FOUND: ${pkgPath}`);
    }
    return require(pkgPath);
  }

  detectNodeVersion(pkg: { engines?: { node?: string } }) {
    if (pkg.engines?.node) {
      const rules = pkg.engines?.node.split(' ');
      // how to find the correct version ?
      console.log(rules);
    }
    return 'latest';
  }

  async run(): Promise<void> {
    // load pkg
    const pkg = this.loadPkg();

    console.log(pkg);
    this.info('hello');
  }
}

export default new DevAction();