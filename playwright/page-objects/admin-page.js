import { Base } from "./base";
import { Header } from "./components/header";
import { LeftNavigation } from "./components/navigation";
import { Tab } from "./components/tab";

class AdminPage extends Base {
  constructor(page) {
    super(page)
    this.header = new Header(page);
    this.leftNavigation = new LeftNavigation(page)
    this.tab = new Tab(page)
  }
}

export {AdminPage}