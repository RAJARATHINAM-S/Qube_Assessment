export function debounce<T extends (...args: any[]) => void>(
  callbackFunction: T,
  delay: number = 250
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFunction(...args);
    }, delay);
  };
}
