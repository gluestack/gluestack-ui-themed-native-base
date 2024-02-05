// @ts-nocheck

export class VariantStore {
  store: any = {};
  createVariant: any;
  // getVariant: any;

  constructor(init: any) {
    this.store = init ?? {};
    // this.getVariant = (Component) => {
    //   this.store.Component;
    // };
  }

  getVariants(componentName: string) {
    if (this.store[`${componentName}`]) {
      return this.store[`${componentName}`];
    }
    return {};
  }

  addVariant(componentName: string, variantName: string, variantCallback: any) {
    this.store[`${componentName}`][`${variantName}`] = variantCallback;
  }
}
