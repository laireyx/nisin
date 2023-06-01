export interface EventMap {
  [eventType: string]: any;
}

export interface EventMapWithArgs {
  [eventType: string]: (...args: any) => any;
}

export interface WorkerRequest<M extends EventMap, T extends keyof M> {
  eventType: T;
  eventSeq: number;

  args: Parameters<M[T]>;
}

export interface WorkerResponse<M extends EventMap, T extends keyof M> {
  eventType: T;
  eventSeq: number;

  result:
    | {
        success: true;
        response: ReturnType<M[T]>;
      }
    | {
        success: false;
        reason: any;
      };
}
