import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home-19'
})
export class AppHome implements ComponentInterface {

  render() {
    return <Host class="p-10">Home</Host>;
  }
}
