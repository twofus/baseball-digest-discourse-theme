import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class BaseballDigestHeaderWelcome extends Component {
  @service currentUser;

  static shouldRender(outletArgs) {
    return !outletArgs?.topicInfoVisible;
  }

  get displayName() {
    return this.currentUser?.name?.trim() || this.currentUser?.username || "";
  }

  <template>
    {{#if this.currentUser}}
      <div class="bd-theme-header-welcome">
        Welcome back, <span>{{this.displayName}}</span>!
      </div>
    {{/if}}
  </template>
}
