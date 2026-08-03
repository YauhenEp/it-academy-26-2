import { Base } from './base';
import { Header } from './components/header';
import { LeftNavigation } from './components/navigation';

class PIMPage extends Base {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.leftNavigation = new LeftNavigation(page);
  }
}

export { PIMPage };
