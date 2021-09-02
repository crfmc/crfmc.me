import React, { useState } from 'react';
import LogoAnimation from './LogoAnimation';

/**
 * A Higher Order Component to handle the displaying of a loader
 * [LoadingMessage] and the loaded component [WrappedComponent].
 */
export const isLoadingHOC = (WrappedComponent, LoadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true); // Default to loading

    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <LogoAnimation message={LoadingMessage} />}
        <WrappedComponent {...props} setLoading={ setLoadingState }/>
      </>
    )
  }
  
  return HOC;
}


export default isLoadingHOC;