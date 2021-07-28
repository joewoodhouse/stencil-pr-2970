import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'root.scss'
})
export class AppRoot {
  render() {
    return <Host>
      <header>
        <stencil-route-link url="/">
          <img class="w-8 h-8 flex" src="/assets/icon/icon.png" />
        </stencil-route-link>
        <h1>Stencil Tailwind Starter</h1>
      </header>

      <main class="overflow-hidden">
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </main>
    </Host>;
  }
}
