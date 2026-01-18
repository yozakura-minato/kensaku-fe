export type ApiResult<T> =
  | { ok: true; status: 200; data: T }
  | { ok: false; status: 400; message: string; errors?: Record<string, string> }
  | { ok: false; status: 500; message: string };

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
      message: "Network error",
    };
  }

  let body: unknown = null;

  try {
    body = await res.json();
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
    const errorBody = body as {
      message?: string;
      errors?: Record<string, string>;
    };

    return {
      ok: false,
      status: 400,
      message: errorBody?.message ?? "Bad request",
      errors: errorBody?.errors,
    };
  }

  const errorBody = body as { message?: string };

  return {
    ok: false,
    status: 500,
    message: errorBody?.message ?? "Internal server error",
  };
}
