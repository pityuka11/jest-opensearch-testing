import {
  ResponseError,
  TimeoutError as ESTimeoutError,
} from "@opensearch-project/opensearch/lib/errors";

export function handleError(error: unknown, scrollId?: string): void {
  if (error instanceof ESTimeoutError) return;
  if (error instanceof ResponseError) {
    return;
  }
}

export function sum(a: number, b: number): number {
  return a + b;
}
