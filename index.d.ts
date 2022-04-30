
declare abstract class FetchEvent extends Event {
    readonly request: Request;
    respondWith(promise: Response | Promise<Response>): void;
    passThroughOnException(): void;
    waitUntil(promise: Promise<any>): void;
}

declare module "flareact" {

    export type EdgePropsCtx<
      TParams = DefaultEdgeParams,
      TQuery = DefaultQueryParams
    > = {
      params: TParams;
      query: TQuery;
      event: FetchEvent;
    };
  
    export type DefaultEdgeParams = { [key: string]: any };
    export type DefaultQueryParams = { [key: string]: any };
  
    export type CustomHeaders = { [key: string]: any };
  
    export type EdgePropsResult<T> = {
      props?: T;
      revalidate?: number;
      notFound?: boolean;
      customHeaders?: CustomHeaders;
    };
  
    export type GetEdgePropsFunc<
      T,
      TParams = DefaultEdgeParams,
      TQuery = DefaultQueryParams
    > = (ctx: EdgePropsCtx<TParams, TQuery>) => Promise<EdgePropsResult<T>>;
  }
  