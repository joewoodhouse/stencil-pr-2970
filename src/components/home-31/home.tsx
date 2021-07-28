import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home-31'
})
export class AppHome implements ComponentInterface {

  render() {
    return <Host class="p-10">Home</Host>;
  }
}
