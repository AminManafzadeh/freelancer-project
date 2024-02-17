import React, { useEffect, useRef } from "react";

function useOutsideClick(handle, listenCapturing = true) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log("hi");
        handle();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handle]);

  return modalRef;
}

export default useOutsideClick;
