class GlobalState {
  private static instance: GlobalState;

  public state: Record<string, any>;

  private constructor() {
    this.state = {};
  }

  public static getInstance(): GlobalState {
    if (!GlobalState.instance) {
      GlobalState.instance = new GlobalState();
    }
    return GlobalState.instance;
  }

  public setState(key: string, value: any): void {
    this.state[key] = value;
  }

  public getState(key: string): any {
    return this.state[key];
  }
}
export default GlobalState.getInstance();
