import { ERROR_TEXT } from "@/constants";
import { ErrorType } from "@/types/article";
import { useState } from "react";

/**
 * 위키 글 추가, 수정을 위한 mutate 및 에러, 로딩 상태를 제공하는 커스텀 훅
 * @param fetchFn
 * @param param1
 *
 */
export function useMutate(
  fetchFn: () => Promise<Response>,
  { onSuccess }: { onSuccess?: () => void }
) {
  const [serverError, setServerError] = useState<ErrorType>({ error: false });
  const [loading, setLoding] = useState(false);

  const mutate = () => {
    setLoding(true);
    fetchFn()
      .then(async (res) => {
        if (res.status === 200) {
          // 성공시
          if (onSuccess) onSuccess();
        } else {
          setServerError({
            error: true,
            message: ERROR_TEXT,
          }); //실패시(에러)
        }
      })
      .finally(() => {
        setLoding(false);
      });
  };

  return { serverError, loading, mutate };
}
