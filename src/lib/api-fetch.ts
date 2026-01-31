import { ERROR_MESSAGES } from "./message";

export type ApiResult<T> =
  | { ok: true; status: 200; data: T }
  | { ok: false; status: 400; message: string; errors?: Record<string, string> }
  | { ok: false; status: 401 | 403 | 404 | 500; message: string };

/**
 * Fetches data from the API and returns a standardized result object.
 * Handles various HTTP status codes and parses JSON responses.
 * @param url The URL to fetch from.
 * @param options Optional fetch options (method, headers, body, etc.).
 * @returns A promise that resolves to an ApiResult containing the data on success,
 * or error information on failure.
 */
export async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResult<T>> {
  let res: Response;

  try {
    res = await fetch(url, options);
  } catch {
    return {
      ok: false,
      status: 500,
      message: ERROR_MESSAGES["GENERAL.ERROR.INTERNAL"],
    };
  }

  let body: unknown = null;

  try {
    const text = await res.text();
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = text;
      }
    }
  } catch {
    // no body
  }

  if (res.status === 200) {
    return {
      ok: true,
      status: 200,
      data: body as T,
    };
  }

  if (res.status === 400) {
    const serverMessage = getErrorMessage(body);
    const errorBody = typeof body === "object" && body !== null 
      ? (body as { errors?: Record<string, string> })
      : {};

    return {
      ok: false,
      status: 400,
      message: serverMessage,
      errors: errorBody?.errors,
    };
  }

  // Catch all other error statuses
  const serverMessage = getErrorMessage(body);
  const statusCode = res.status as 401 | 403 | 404 | 500;

  return {
    ok: false,
    status: statusCode,
    message: serverMessage || ERROR_MESSAGES["GENERAL.ERROR.UNKNOWN"],
  };
}

function getErrorMessage(body: unknown): string {
  // Handle string exception from Spring Boot
  if (typeof body === "string") {
    return body;
  }

  // Handle JSON object with message property
  if (typeof body === "object" && body !== null) {
    const obj = body as Record<string, unknown>;
    if (obj.message && typeof obj.message === "string") {
      return obj.message;
    }
    if (obj.error && typeof obj.error === "string") {
      return obj.error;
    }
  }

  return "";
}
