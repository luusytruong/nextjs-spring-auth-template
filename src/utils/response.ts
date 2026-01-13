import { ApiResponse } from "@/types/response";
import toast from "react-hot-toast";

// Type cho options để dễ mở rộng sau này
interface HandleApiOptions<T> {
  showSuccessToast?: boolean;
  showErrorToast?: boolean;
  onSuccess?: (response: ApiResponse<T>) => Promise<void> | void;
  onError?: (error: unknown | ApiResponse<T>) => Promise<void> | void;
}

// Hàm chính, generic T giữ nguyên
export async function handleApiResponse<T>(
  promise: Promise<ApiResponse<T>>,
  options: HandleApiOptions<T> = {}
): Promise<void> {
  const {
    showSuccessToast = true,
    showErrorToast = true,
    onSuccess,
    onError,
  } = options;

  try {
    const response = await promise;

    if (response.success) {
      if (showSuccessToast) {
        toast.success(response.message || "Thành công");
      }
      if (onSuccess) {
        await onSuccess(response); // await để hỗ trợ async callback
      }
    } else {
      // Xử lý lỗi từ API (success: false)
      const errors = response.errors;
      const message = response.message || "Lỗi không xác định";

      if (showErrorToast) {
        if (errors && Array.isArray(errors)) {
          errors.forEach((error: string) => toast.error(error));
        } else {
          toast.error(message);
        }
      }

      if (onError) {
        await onError(response); // truyền response fail vào onError
      }
    }
  } catch (error: unknown) {
    // Lỗi network, timeout, server 500, v.v.
    console.error("[API ERROR]", error);

    if (showErrorToast) {
      toast.error((error as Error)?.message || "Lỗi không xác định");
    }

    if (onError) {
      await onError(error);
    }
  }
}
