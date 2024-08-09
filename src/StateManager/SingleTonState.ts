class SingleTonState {
  private static instance: SingleTonState;

  public state: Record<string, any>;

  private constructor() {
    // super();
    this.state = {};
  }

  public static getInstance(): SingleTonState {
    if (!SingleTonState.instance) {
      SingleTonState.instance = new SingleTonState();
    }
    return SingleTonState.instance;
  }

  public setState(key: string, value: any): void {
    this.state[key] = value;
  }

  public getState(key: string): any {
    return this.state[key];
  }
}

const global = SingleTonState.getInstance();

export const { setState, getState } = global;

// Removi o event emiter por agora. Ainda não estou trabalhando com rerenderização;
