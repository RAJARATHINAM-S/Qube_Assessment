import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

interface SpinnerContextType {
  isLoading: boolean;
  isTableLoading: boolean;
  showLoaderInner: () => void;
  hideLoaderInner: () => void;
  showTableLoader: () => void;
  hideTableLoader: () => void;
}

interface Props {
  children: React.ReactNode;
}
export const LoaderComponent = () => {
  return (
    <div className="loader-main">
      <div className="loader-content"></div>
    </div>
  );
};
export const SpinnerContext = createContext<SpinnerContextType>({
  isLoading: false,
  isTableLoading: false,
  showLoaderInner: () => {},
  hideLoaderInner: () => {},
  showTableLoader: () => {},
  hideTableLoader: () => {},
});

export const useSpinner = () => useContext(SpinnerContext);

let externalShowLoader: () => void;
let externalHideLoader: () => void;
let externalShowTableLoader: () => void;
let externalHideTableLoader: () => void;

const SpinnerProvider: React.FC<Props> = ({ children }) => {
  const [loaderCount, setLoaderCount] = useState(1);
  const [isTableLoading, setTableLoading] = useState(false);

  const showLoaderInner = useCallback(() => {
    setLoaderCount((prevCount) => prevCount + 1);
  }, []);

  const hideLoaderInner = useCallback((msg = '') => {
    setTimeout(() => {
      setLoaderCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 500);
  }, []);

  const showTableLoader = useCallback(() => {
    setTableLoading(true);
  }, []);

  const hideTableLoader = useCallback(() => {
    setTableLoading(false);
  }, []);

  externalShowLoader = showLoaderInner;
  externalHideLoader = hideLoaderInner;
  externalShowTableLoader = showTableLoader;
  externalHideTableLoader = hideTableLoader;

  useEffect(() => {
    hideLoaderInner();
  }, []);

  return (
    <SpinnerContext.Provider
      value={{
        isLoading: loaderCount > 0,
        isTableLoading,
        showLoaderInner,
        hideLoaderInner,
        showTableLoader,
        hideTableLoader,
      }}
    >
      {children}

      {loaderCount > 0 && <LoaderComponent />}
    </SpinnerContext.Provider>
  );
};

export const showLoader = () => externalShowLoader && externalShowLoader();
export const hideLoader = () => externalHideLoader && externalHideLoader();

export const showTableLoader = () =>
  externalShowTableLoader && externalShowTableLoader();
export const hideTableLoader = () =>
  externalHideTableLoader && externalHideTableLoader();

export default SpinnerProvider;
