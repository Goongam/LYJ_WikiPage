import { ChangeEvent, useState } from "react";

// 글 추가, 수정 시 input의 값과 에러 상태를 관리하기 위한 훅
export function useInput(initValue: string) {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState(false);

  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setError(false);
  };

  const showError = (text?: string) => {
    setError(true);
  };

  return { value, onchange, error, showError };
}
