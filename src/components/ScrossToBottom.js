import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToBottom = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 1000);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToBottom;